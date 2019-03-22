var configuration = {
    "rules": {
        "align": [
            true,
            "parameters",
            "arguments",
            "statements"
        ],
        "ban": false,
        "class-name": true,
        "comment-format": [ 
            true, 
            "check-space", 
            "check-uppercase" 
        ],
        "curly": true,
        "eofline": false,
        "forin": true,
        "indent": [ 
            true, 
            "spaces" 
        ],
        "interface-name": true,
        "jsdoc-format": true,
        "label-position": true,
        "label-undefined": true,
        "max-line-length": [ 
            false, 140 
        ],
        "member-access": [
            true,
            "check-accessor"
        ],
        "member-ordering": [
            false,
            "public-before-private",
            "static-before-instance",
            "variables-before-functions"
        ],
        "no-any": true,
        "no-arg": true,
        "no-bitwise": false,
        "no-console": [
            true,
            "log",
            "debug",
            "info",
            "time",
            "timeEnd",
            "trace"
        ],
        "no-conditional-assignment": true,
        "no-consecutive-blank-lines": true,
        "no-construct": true,
        "no-constructor-vars": true,
        "no-debugger": true,
        "no-duplicate-key": true,
        "no-duplicate-variable": true,
        "no-shadowed-variable": false,
        "no-empty": false,
        "no-eval": true,
        "no-string-literal": true,
        "no-switch-case-fall-through": true,
        "no-trailing-whitespace": true,
        "no-unreachable": true,
        "no-unused-expression": true,
        "no-unused-variable": true,
        "no-use-before-declare": true,
        "no-var-keyword": true,
        "no-var-requires": true,
        "one-line": [
            true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace"
        ],
        "quotemark": [ 
            true, 
            "single" 
        ],
        "radix": true,
        "semicolon": [ 
            true, 
            "always" 
        ],
        "switch-default": true,
        "triple-equals": [ 
            true, 
            "allow-null-check" 
        ],
        "typedef": [
            true,
            "arrow-parameter",
            "call-signature",
            "parameter",
            "property-declaration",
            "variable-declaration",
            "member-variable-declaration"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            }
        ],
        "use-strict": [
            false,
            "check-module",
            "check-function"
        ],
        "variable-name": [ 
            true, 
            "allow-leading-underscore" 
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-type"
        ],
        "class-member-naming": true,
        "crlf-only": true
    }
};
module.exports = {
    options: {
        configuration: configuration,
        rulesDirectory: 'grunt/tslint/rules/',
        formatter: 'msbuild'
    },
    files: {
        src:  [
            'src/dto/*.ts',
            'src/dto/**/*.ts',
            'src/app/*.ts',
            'src/app/**/*.ts',
            'src/pages/**/*.ts'
      ]
    }
};