# SX.jl

[![Build Status](https://travis-ci.org/JuliaReach/SX.jl.svg?branch=master)](https://travis-ci.org/JuliaReach/SX.jl)
[![Docs latest](https://img.shields.io/badge/docs-latest-blue.svg)](http://juliareach.github.io/SX.jl/latest/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/JuliaReach/SX.jl/blob/master/LICENSE.md)
[![Code coverage](http://codecov.io/github/JuliaReach/SX.jl/coverage.svg?branch=master)](https://codecov.io/github/JuliaReach/SX.jl?branch=master)
[![Join the chat at https://gitter.im/JuliaReach/Lobby](https://badges.gitter.im/JuliaReach/Lobby.svg)](https://gitter.im/JuliaReach/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

`SX` is a [Julia](http://julialang.org) package to parse SpaceEx modeling files.

## Resources

- [Manual](http://juliareach.github.io/SX.jl/latest/)
- [Contributing](https://juliareach.github.io/SX.jl/latest/about.html#Contributing-1)
- [Release notes](https://github.com/JuliaReach/SX.jl/releases)
- [Release notes of the development version](https://github.com/JuliaReach/SX.jl/wiki/Release-log-tracker)

## Dependencies

This package relies on the interfaces defined in [HybridSystems.jl](https://github.com/blegat/HybridSystems.jl) and [MathematicalSystems.jl](https://github.com/JuliaReach/MathematicalSystems.jl). To handle XML files, we use [EzXML.jl](https://github.com/bicycle1885/EzXML.jl). Symbolic algebraic manipulations are performed with [SymEngine](https://github.com/symengine/SymEngine.jl). 

## Installing

This package requires Julia v1.0 or later. Refer to the
[official documentation](https://julialang.org/downloads) on how to install and
run Julia in your system.

To install the package `SX`, use the following command inside Julia's REPL:

```julia
using Pkg
Pkg.clone("https://github.com/JuliaReach/SX.jl")
```

## Updating

To checkout the latest (development) version, do:

```julia
Pkg.add(PackageSpec(url="https://github.com/JuliaReach/SX.jl", rev="master"))
```