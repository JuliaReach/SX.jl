var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#SX.jl-1",
    "page": "Home",
    "title": "SX.jl",
    "category": "section",
    "text": "DocTestFilters = [r\"[0-9\\.]+ seconds \\(.*\\)\"]SX is a Julia package to parse SpaceEx modeling files."
},

{
    "location": "index.html#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "Parse SX files into types defined in Julia packages HybridSystems.jl and Systems.jl."
},

{
    "location": "index.html#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": "The folder /examples contains a collection of model files that are available from different sources:SpaceEx webpage, small selection of examples that is part of the VM Server distribution and can be executed directly from the SpaceEx web interface."
},

{
    "location": "index.html#Remarks-1",
    "page": "Home",
    "title": "Remarks",
    "category": "section",
    "text": "The examples consist of single hybrid automata that are constructed via flattening (parallel composition). This can be done via SpaceEx executable file with the command spaceex -g name.cfg -m name.xml --output-system-file new_name.xmlHowever, note that the flattening process change the original model and may induce parsing errors. The parsing errors only appear when the constructed model is visualized/analyzed with the Model Editor or/and the Web Interface. There are no parsing errors with the source code/executable SpaceEx. A list of identified parsing problems follows below. Special symbols, e.g. ~, _ in the variable and location names\nCharacters and symbols in the notes\nNondeterministic flows, e.g. x\'==x+w, where 0<w1<0.1 (see bball_nondet)\nNondeterministic resets, e.g. v\' == -0.75*v+w2 (see bball_nondet)\nNaming issues, e.g. default variable name is component.subcomponent.variableThe aforementioned problems would yield errors/warnings when parsed.1. ERROR | in component \'osc_w_4th_order\' the string \'osc.osci.hop\'  \ndoesn\'t match NAME pattern [a-zA-Z_][a-zA-Z0-9_]* >>> element \nlabel removed \n\n2. Error: name=\"pp-always-always-always-always\" value doesn\'t match \nNAME pattern [a-zA-Z_][a-zA-Z0-9_]*>>> set to default: \"unnamed\"\n\n3. ERROR |  new LOCATION with name= \'unnamed\'; name already exist,\nrenamed in \'unnamed2\'\n\n4. ERROR: Failed to parse model file phpxbMjAb.xml.\ncaused by: Could not parse base component system.\ncaused by: Failed to parse flow of location always.\ncaused by: Could not parse predicate\n\n5. Constructed Reset: x\' == x & v\' == -0.75*v with offset \nsupport_function ( w1 >= -0.0499999 & w1 <= 0.0499999 & \nw2 >= -0.0999999 & w2 <= 0.0999999, mapped by x\' == 0 & v\' == w2 )\n\n6. Constructed Flow:  x\' == v & v\' == -0.999999 with offset \nsupport_function(x >= 0 & SLACK2 <= 0.0999999 & SLACK2 >= 0 & \nSLACK4 <= 0.199999 & SLACK4 >= 0, mapped by x\' == 0 & v\' == -SLACK2+0.0499999 ) "
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2"
},

{
    "location": "lib/types.html#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": ""
},

{
    "location": "lib/types.html#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This section describes systems types implemented in SX.jl.Pages = [\"types.md\"]\nDepth = 3CurrentModule = SX\nDocTestSetup = quote\n    using SX\nend"
},

{
    "location": "lib/methods.html#",
    "page": "Methods",
    "title": "Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/methods.html#Methods-1",
    "page": "Methods",
    "title": "Methods",
    "category": "section",
    "text": "This section describes systems methods implemented in SX.jl.Pages = [\"methods.md\"]\nDepth = 3CurrentModule = SX\nDocTestSetup = quote\n    using SX\nend"
},

{
    "location": "about.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about.html#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.Below we detail some of the guidelines that should be followed when contributing to this package."
},

{
    "location": "about.html#Branches-1",
    "page": "About",
    "title": "Branches",
    "category": "section",
    "text": "Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. t/mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. t/mforets/7."
},

{
    "location": "about.html#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jl"
},

{
    "location": "about.html#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:$ julia --color=yes docs/make.jl"
},

{
    "location": "about.html#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to SX.jl (in alphabetic order):Marcelo Forets\nNikos Kekatos"
},

]}
