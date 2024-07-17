<h1 align='center'>Typetility</h1>
<p align='center'>Utility types for TypeScript</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic](#basic)
  - [Object](#object)
  - [String](#string)
- [License](#license)

## Installation

Install typetility with npm:

```sh
    npm i -D typetility
```

or with yarn:

```sh
    yarn add typetility
```

## Usage

Typetility provides a set of general purpose utility types that can be used to alter or augment existing type constructs.

The types are broken down into several categories:

### Basic

General purpose types providing a few data constructs.

- `Entry` defines a simple object with a `key` and `value` property
- `List` defines a tail recursive data structure
- `Tempatable` defines the types that can inserted into template strings
- `Pair` defines a 2-valued tuple of a specific type
- `DistinctPair` defines a 2-valued tuple of a specific type where the values are distinct
- `Constructor` defines a constructor signature of a sequence of argument types
- `Class` defines a type that all classes follow

### Object

Types that extract or augment JS objects.

- `Complete` defines a type where all sub-properties are not optional
- `Incomplete` defines a type where all sub-properties are optional
- `Reverse` defines a type where the key-value entries are reversed
- `Entries` defines a type where all key-value entries are combined into a union of `Entry` types
- `CombineEntries` defines a type where all union `Entry` types are combined into key-value entries of a single JS object
- `IncludeTypes` defines a type where only properties of a specific type is included
- `ExcludeTypes` defines a type where all properties of a specific type is excluded
- `Flat` defines a type where all nested objects have their properties flattened into a single depth object

### String

Types that extract or augment strings.

- `Split` defines an array type from a string where the elements represent the sequence of characters
- `Join` defines a string type from an array of strings where all the elements are joined
- `Capitalize` defines a string type where the first letter is capitalized
- `FirstWord` defines a string type of the first word in a camelcase string
- `CamelList` defines an array type from a camelcase string where the elements matches the sequence of words
- `GetterName` appends `get` to a capitalized string
- `SetterName` appends `set` to a capitalized string

## License

Typetility is available under the [MIT license](LICENSE.md).