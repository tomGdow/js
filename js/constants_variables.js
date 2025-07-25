
let baseFileName;
baseFileName = getBaseFileName(baseFileName);

//     baseFileName = "index"
// }

//Add New FileName(s)
let pageArr = ["index",
    "exam_objectives",
    "Module-One",
    "assignment",
    "increment_decrement",
    "plus",
    "minus",
    "multiply",
    "divide",
    "power",
    "modulus",
    "addition_assignment",
    "subtraction_assignment",
    "multiplication_assignment",
    "division_assignment",
    "remainder_assignment",
    "exponentiation_assignment",
    "comments",
    "indentation",
    "naming_conventions",
    "noscript",
    "const",
    "let_var",
    "temporal_dead_zone",
    "errors_quiz",
    "errors",
    "reserved_keywords",
    "debugger",
    "console_log",
    "script",
    "try_catch",
    "bom",
    "bom_components",
    "screen_browser_height",
    "dialog_boxes",
    "domain_one_questions_part_one",
    "domain_one_questions_part_two",
    "Module-Two",
    "primitives",
    "number",
    "coercion",
    "boolean",
    "string",
    "string_replace",
    "null",
    "undefined",
    "nan",
    "typeof",
    "type_checking",
    "is_integer",
    "tofixed",
    "toprecision",
    "concat",
    "use_strict",
    "parse_int",
    "parse_float",
    "formatting_numbers",
    "arrow_functions",
    "multidimensional_array_examples",
    "instantiation",
    "class_examples_one",
    "in",
    "includes",
    "date_object",
    "date_timestring",
    "date_quiz",
    "math",
    "math_random",
    "math_ceil",
    "math_floor",
    "math_round",
    "math_quiz",
    "eval",
    "arrays",
    "array_sort",
    "array_parts",
    "function_scope",
    "domain_two_questions_1-10",
    "Module-Three",
    "equality",
    "if",
    "else_if",
    "switch",
    "nested_if",
    "for",
    "for_in",
    "for_of",
    "while",
    "do_while",
    "break",
    "continue",
    "pass_by_object_sharing",
    "Module-Four",
    "create_element",
    "animation_example",
    "on_load",
    "on_focus_blur",
    "on_change",
    "on_keydown_keyup",
    "on_keypress",
    "on_click",
    "on_mouseover_mouseout",
    "textcontent_innerhtml",
    "on_input",
    "document_dot_write",
    "window_dot_open",
    "Module-Five",
    "forms_basic_one",
    "forms_basic_iframe_two",
    "forms_more_examples",
    "forms_post_fetch",
    "forms_get_fetch",
    "mnemonics"];

pageArr.push("search"); // 'search' should be the last term in pageArr

let pageTitleArr = [
    "js-index",
    "js-exam-objectives",
    "M1",
    "assignment",
    "incr-decr",
    "plus",
    "minus",
    "multiply",
    "divide",
    "power",
    "mod",
    "+assignment",
    "-assignment",
    "*assignment",
    "/assignment",
    "%assignment",
    "**exponentiation",
    "comments",
    "indentation",
    "naming",
    "noscript",
    "const",
    "let_var",
    "TDZ",
    "errors",
    "err_quiz",
    "reserved",
    "debugger",
    "console",
    "script",
    "try catch",
    "bom",
    "bom-comp",
    "sb-height",
    "dialog-box",
    "d1Q-a",
    "d1Q-b",
    "M2",
    "primitives",
    "number",
    "coercion",
    "boolean",
    "string",
    "string_replace",
    "null",
    "undefined",
    "nan",
    "typeof",
    "type_check",
    "is_integer",
    "tofixed",
    "toprecision",
    "concat",
    "use_strict",
    "parseInt",
    "parseFloat",
    "formatNum",
    "arrows",
    "multidim-egs",
    "instantiation",
    "class-egs",
    "in",
    "includes",
    "date-obj",
    "timestring",
    "date-quiz",
    "math",
    "math_random",
    "math_ceil",
    "math_floor",
    "math_round",
    "math_quiz",
    "eval",
    "arrays",
    "array_sort",
    "array_parts",
    "function_scope",
    "d2 1-10",
    "M3",
    "equality",
    "if",
    "else_if",
    "switch",
    "nested_if",
    "for",
    "for_in",
    "for_of",
    "while",
    "do_while",
    "break",
    "continue",
    "pass_object_sharing",
    "M4",
    "create_element",
    "animation_example",
    "on_load",
    "on_focus_blur",
    "on_change",
    "on_keydown_keyup",
    "on_keypress",
    "on_click",
    "on_mouseover_mouseout",
    "textcontent_innerhtml",
    "on_input",
    "document_dot_write",
    "window_dot_open",
    "M5",
    "forms_basic_one",
    "forms_basic_two",
    "forms_more_egs",
    "forms_post_fetch",
    "forms_get_fetch",
    "mnemonics",
    "js-search"];

// Add banner third part
const bannerThirdPart = "js";

// Add (meta) keyword list
const myKeywordList = "javascript, IT, specialist";

// Add (meta) description
const myDescription = "Notes for the IT Specialist in JavaScript Course at ecollege";
