module Re = Dune_re
module Json = Yojson.Basic

let debug_mode = true
let debug k = if debug_mode then k Format.eprintf

let index_json =
  let index_file = "./index.json" in
  Json.from_file index_file |> Json.Util.to_list

let runtime_packages =
  let tbl = Hashtbl.create 16 in
  Array.iter
    (fun k -> Hashtbl.replace tbl k ())
    [| "os"; "fs"; "path"; "child_process"; "util"; "http"; "url" |];
  tbl

let filter_common matches =
  List.filter_map
    (fun group ->
      let match_ = Re.Group.get group 1 in
      if Hashtbl.mem runtime_packages match_ then None else Some match_)
    matches

let parse_dependencies vuln_json =
  let filename = Json.Util.member "filename" vuln_json |> Json.Util.to_string in
  let r = Re.compile @@ Re.Perl.re {|require\(["']([\w_-]+)["']\)|} in
  In_channel.with_open_text filename @@ fun ic ->
  let data = In_channel.input_all ic in
  let matches = Re.all r data in
  let dependencies = filter_common matches in
  let () =
    match dependencies with
    | [] -> ()
    | _ ->
        debug (fun k ->
            k "@[<hov 2>Found: %a@]@."
              (Format.pp_print_list ~pp_sep:Format.pp_print_space
                 Format.pp_print_string)
              dependencies)
  in
  (filename, dependencies)

let to_package_json _main deps =
  let index_file, _ = List.hd deps in
  let package_dir = Filename.dirname index_file in
  let package_file = Filename.concat package_dir "package.json" in
  Out_channel.with_open_text package_file @@ fun oc ->
  let deps = List.concat_map snd deps in
  let deps = List.sort_uniq String.compare deps in
  let deps = `Assoc (List.map (fun dep -> (dep, `String "latest")) deps) in
  let data =
    Format.asprintf "%a"
      (Json.pretty_print ~std:true)
      (`Assoc [ ("dependencies", deps) ])
  in
  Out_channel.output_string oc data

let () =
  List.iter
    (fun pkg ->
      let vulns_json = Json.Util.member "vulns" pkg |> Json.Util.to_list in
      let deps = List.map parse_dependencies vulns_json in
      to_package_json None deps)
    index_json
