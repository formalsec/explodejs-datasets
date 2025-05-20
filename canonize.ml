module Json = Yojson.Basic

[@@@ocaml.warning "-32"]

type vuln = {
  vuln_type : string;
  sink : string;
  sink_lineno : int;
  file : string;
}

let json_of_vuln { vuln_type; sink; sink_lineno; file } =
  `Assoc
    [
      ("vuln_type", `String vuln_type);
      ("sink", `String sink);
      ("sink_lineno", `Int sink_lineno);
      ("file", `String file);
    ]

let vuln_of_json json =
  let open Json.Util in
  let vuln_type = member "vuln_type" json |> to_string in
  let sink = member "sink" json |> to_string in
  let sink_lineno = member "sink_lineno" json |> to_int in
  let file = member "file" json |> to_string in
  { vuln_type; sink; sink_lineno; file }

type t = vuln list

let json_of_t lst = `List (List.map json_of_vuln lst)
let t_of_json json : t = Json.Util.to_list json |> List.map vuln_of_json

let vulcan_files =
  Script_utils.find "./vulcan-dataset" ~recursive:true
    ~filter:
      (`Sat
         (fun fpath ->
           if not (String.ends_with ~suffix:".json" fpath) then false
           else
             let no_ext = Filename.remove_extension fpath in
             let basename = Filename.basename no_ext in
             let basename_dirname = Filename.(basename (dirname no_ext)) in
             basename = basename_dirname))

let parse_vulcan_vuln fpath =
  let open Json.Util in
  let dir = Filename.dirname fpath in
  let json_data = Json.from_file fpath in
  let vuln_type =
    match member "correct_cwe" json_data with
    | `String x -> x
    | `List [ `String "CWE-471"; `String "CWE-1321" ] -> "CWE-1321"
    | _ -> assert false
  in
  let vuln = member "vulnerability" json_data in
  member "vulnerability_location" vuln
  |> to_list
  |> List.map @@ fun json ->
     match member "sink" json with
     | `Null ->
         let block = member "block" json in
         (* Always return basename of the file *)
         let file = Filename.basename (member "file" block |> to_string) in
         assert (Sys.file_exists Filename.(concat (concat dir "src") file));
         let sink_lineno = member "start_lineno" block |> to_int in
         let sink = member "code" block |> to_string in
         { vuln_type; sink; sink_lineno; file }
     | sink ->
         (* Always return basename of the file *)
         let file = Filename.basename (member "file" sink |> to_string) in
         assert (Sys.file_exists Filename.(concat (concat dir "src") file));
         let sink_lineno = member "lineno" sink |> to_int in
         let sink = member "code" sink |> to_string in
         { vuln_type; sink; sink_lineno; file }

let copy_json ?check_from src dst =
  let data = Json.from_file src in
  (* Ensure paths are ok *)
  List.iter
    (fun json ->
      match Json.Util.member "file" json with
      | `String path ->
          let base =
            match check_from with
            | None -> Filename.dirname src
            | Some dir -> dir
          in
          assert (Sys.file_exists Filename.(concat (concat base "src") path))
      | _ -> assert false)
    (Json.Util.to_list data);
  Out_channel.with_open_text dst @@ fun oc ->
  let fmt = Format.formatter_of_out_channel oc in
  Format.fprintf fmt "%a@." (Json.pretty_print ~std:true) data

let fix_vulcan () =
  let n = List.length vulcan_files in
  List.iteri
    (fun i fpath ->
      Format.eprintf "[%03d/%d] Parsing %s ...@." (i + 1) n fpath;
      let vulns = parse_vulcan_vuln fpath in
      let vulns = `List (List.map json_of_vuln vulns) in
      let dirname = Filename.dirname fpath in
      let output_dir = Filename.concat dirname "expected" in
      if not (Sys.file_exists output_dir) then Sys.mkdir output_dir 0o755;
      let output_file = Filename.concat output_dir "detection.json" in
      Out_channel.with_open_text output_file (fun oc ->
          let fmt = Format.formatter_of_out_channel oc in
          Format.fprintf fmt "%a@." (Json.pretty_print ~std:true) vulns);
      let no_ext = Filename.remove_extension fpath in
      let src_extended = no_ext ^ "-extended.json" in
      let dst_extended = Filename.concat output_dir "detection_extended.json" in
      copy_json src_extended dst_extended)
    vulcan_files

let _ = fix_vulcan

let vulcan_files =
  Script_utils.find "./vulcan-dataset" ~recursive:true
    ~filter:
      (`Sat
         (fun fpath ->
           String.ends_with ~suffix:"expected/detection_extended.json" fpath))

let secbench_files =
  Script_utils.find "./secbench-dataset" ~recursive:true
    ~filter:
      (`Sat
         (fun fpath ->
           String.ends_with ~suffix:"expected/detection_extended.json" fpath))

let canonize_vuln_type = function
  | "path-traversal" -> "CWE-22"
  | "command-injection" -> "CWE-78"
  | "code-injection" -> "CWE-94"
  | "prototype-pollution" -> "CWE-1321"
  | vuln_type ->
      Format.ksprintf failwith "Uknown vulnerability type '%s'" vuln_type

let parse_secbench_vuln fpath =
  let open Json.Util in
  `List
    (Json.from_file fpath |> to_list
    |> List.map (fun json ->
           let vuln_type =
             member "vuln_type" json |> to_string |> canonize_vuln_type
           in
           let sink = "" in
           let sink_lineno =
             member "sink_lineno" json |> to_string |> int_of_string
           in
           let file =
             member "sink_file" json |> to_string |> Filename.basename
           in
           let root = Filename.(dirname (dirname fpath)) in
           assert (Sys.file_exists Filename.(concat (concat root "src") file));
           { vuln_type; sink; sink_lineno; file })
    |> List.map json_of_vuln)

let fix_secbench () =
  let n = List.length secbench_files in
  List.iteri
    (fun i fpath ->
      Format.eprintf "[%03d/%d] Parsing %s ...@." (i + 1) n fpath;
      let _ = parse_secbench_vuln in
      (* let vulns = parse_secbench_vuln fpath in *)
      (* Out_channel.with_open_text fpath (fun oc -> *)
      (*     let fmt = Format.formatter_of_out_channel oc in *)
      (*     Format.fprintf fmt "%a@." (Json.pretty_print ~std:true) vulns); *)
      let root = Filename.(dirname (dirname fpath)) in
      let no_ext = Filename.remove_extension fpath in
      let src_extended = no_ext ^ "_extended.json" in
      copy_json ~check_from:root src_extended src_extended)
    secbench_files

let _ = fix_secbench

let get_sink lineno file =
  In_channel.with_open_text file @@ fun ic ->
  let rec loop i =
    let line = In_channel.input_line ic in
    if i = lineno then Option.get line else loop (i + 1)
  in
  String.trim (loop 1)

let add_sink_to_secbench () =
  let n = List.length secbench_files in
  List.iteri
    (fun i fpath ->
      Format.eprintf "[%03d/%d] Parsing %s ...@." (i + 1) n fpath;
      let json_data = Json.from_file fpath in
      let vulns = t_of_json json_data in
      let vulns =
        List.map
          (fun v ->
            let root = Filename.(dirname (dirname fpath)) in
            let file = Filename.(concat (concat root "src") v.file) in
            let lineno = v.sink_lineno in
            let sink = get_sink lineno file in
            Format.printf "SINK: %s@." sink;
            { v with sink })
          vulns
      in
      let vulns = json_of_t vulns in
      Out_channel.with_open_text fpath @@ fun oc ->
      let fmt = Format.formatter_of_out_channel oc in
      Format.fprintf fmt "%a@." (Json.pretty_print ~std:true) vulns)
    secbench_files

let _ = add_sink_to_secbench

let add_sink_to_vulcan () =
  let n = List.length vulcan_files in
  List.iteri
    (fun i fpath ->
      Format.eprintf "[%03d/%d] Parsing %s ...@." (i + 1) n fpath;
      let json_data = Json.from_file fpath in
      let vulns = t_of_json json_data in
      let vulns =
        List.map
          (fun v ->
            let root = Filename.(dirname (dirname fpath)) in
            let file = Filename.(concat (concat root "src") v.file) in
            let lineno = v.sink_lineno in
            let sink = get_sink lineno file in
            Format.printf "SINK: %s@." sink;
            { v with sink })
          vulns
      in
      let vulns = json_of_t vulns in
      Out_channel.with_open_text fpath @@ fun oc ->
      let fmt = Format.formatter_of_out_channel oc in
      Format.fprintf fmt "%a@." (Json.pretty_print ~std:true) vulns)
    vulcan_files

let _ = add_sink_to_vulcan
let () = add_sink_to_secbench ()
