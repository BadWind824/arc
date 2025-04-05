/* PrismJS 1.28.0
https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+antlr4+apacheconf+apl+applescript+aql+arduino+arff+asciidoc+aspnet+asm6502+autohotkey+autoit+bash+basic+batch+bbcode+bison+bnf+brainfuck+brightscript+bro+c+csharp+cpp+cil+clojure+cmake+coffeescript+csp+crystal+css-extras+d+dart+diff+django+dns-zone-file+docker+ebnf+eiffel+ejs+elixir+elm+etlua+erb+erlang+fsharp+firestore-security-rules+flow+fortran+ftl+gml+gcode+gdscript+gedcom+gherkin+git+glsl+go+graphql+groovy+haml+handlebars+haskell+haxe+hcl+http+hpkp+hsts+ichigojam+icon+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jolie+jq+jsdoc+js-extras+json+json5+jsonp+js-templates+julia+keyman+kotlin+latex+latte+less+lilypond+liquid+lisp+livescript+lolcode+lua+makefile+markdown+markup-templating+matlab+mel+mizar+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+nasm+neon+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+pascaligo+pcaxis+perl+php+phpdoc+php-extras+plsql+powershell+processing+prolog+properties+protobuf+pug+puppet+pure+python+q+qml+qore+r+jsx+tsx+reason+regex+renpy+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smalltalk+smarty+solidity+soy+sparql+splunk-spl+sqf+sql+stylus+swift+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+turtle+twig+typescript+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+wasm+wiki+xeora+xojo+xquery+yaml+zig */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      r = {},
      a = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof i
              ? new i(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ')
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1)
          },
          objId: function (e) {
            return (
              e.__id ||
                Object.defineProperty(e, '__id', {
                  value: ++t,
                }),
              e.__id
            )
          },
          clone: function e(n, t) {
            var r, i
            switch (((t = t || {}), a.util.type(n))) {
              case 'Object':
                if (((i = a.util.objId(n)), t[i])) return t[i]
                for (var l in ((r = {}), (t[i] = r), n))
                  n.hasOwnProperty(l) && (r[l] = e(n[l], t))
                return r
              case 'Array':
                return (
                  (i = a.util.objId(n)),
                  t[i]
                    ? t[i]
                    : ((r = []),
                      (t[i] = r),
                      n.forEach(function (n, a) {
                        r[a] = e(n, t)
                      }),
                      r)
                )
              default:
                return n
            }
          },
          getLanguage: function (e) {
            for (; e; ) {
              var t = n.exec(e.className)
              if (t) return t[1].toLowerCase()
              e = e.parentElement
            }
            return 'none'
          },
          setLanguage: function (e, t) {
            ;(e.className = e.className.replace(RegExp(n, 'gi'), '')),
              e.classList.add('language-' + t)
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null
            if ('currentScript' in document) return document.currentScript
            try {
              throw new Error()
            } catch (r) {
              var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) ||
                [])[1]
              if (e) {
                var n = document.getElementsByTagName('script')
                for (var t in n) if (n[t].src == e) return n[t]
              }
              return null
            }
          },
          isActive: function (e, n, t) {
            for (var r = 'no-' + n; e; ) {
              var a = e.classList
              if (a.contains(n)) return !0
              if (a.contains(r)) return !1
              e = e.parentElement
            }
            return !!t
          },
        },
        languages: {
          plain: r,
          plaintext: r,
          text: r,
          txt: r,
          extend: function (e, n) {
            var t = a.util.clone(a.languages[e])
            for (var r in n) t[r] = n[r]
            return t
          },
          insertBefore: function (e, n, t, r) {
            var i = (r = r || a.languages)[e],
              l = {}
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                if (o == n)
                  for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s])
                t.hasOwnProperty(o) || (l[o] = i[o])
              }
            var u = r[e]
            return (
              (r[e] = l),
              a.languages.DFS(a.languages, function (n, t) {
                t === u && n != e && (this[n] = l)
              }),
              l
            )
          },
          DFS: function e(n, t, r, i) {
            i = i || {}
            var l = a.util.objId
            for (var o in n)
              if (n.hasOwnProperty(o)) {
                t.call(n, o, n[o], r || o)
                var s = n[o],
                  u = a.util.type(s)
                'Object' !== u || i[l(s)]
                  ? 'Array' !== u || i[l(s)] || ((i[l(s)] = !0), e(s, t, o, i))
                  : ((i[l(s)] = !0), e(s, t, null, i))
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          a.highlightAllUnder(document, e, n)
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          }
          a.hooks.run('before-highlightall', r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            a.hooks.run('before-all-elements-highlight', r)
          for (var i, l = 0; (i = r.elements[l++]); )
            a.highlightElement(i, !0 === n, r.callback)
        },
        highlightElement: function (n, t, r) {
          var i = a.util.getLanguage(n),
            l = a.languages[i]
          a.util.setLanguage(n, i)
          var o = n.parentElement
          o && 'pre' === o.nodeName.toLowerCase() && a.util.setLanguage(o, i)
          var s = {
            element: n,
            language: i,
            grammar: l,
            code: n.textContent,
          }
          function u(e) {
            ;(s.highlightedCode = e),
              a.hooks.run('before-insert', s),
              (s.element.innerHTML = s.highlightedCode),
              a.hooks.run('after-highlight', s),
              a.hooks.run('complete', s),
              r && r.call(s.element)
          }
          if (
            (a.hooks.run('before-sanity-check', s),
            (o = s.element.parentElement) &&
              'pre' === o.nodeName.toLowerCase() &&
              !o.hasAttribute('tabindex') &&
              o.setAttribute('tabindex', '0'),
            !s.code)
          )
            return a.hooks.run('complete', s), void (r && r.call(s.element))
          if ((a.hooks.run('before-highlight', s), s.grammar))
            if (t && e.Worker) {
              var c = new Worker(a.filename)
              ;(c.onmessage = function (e) {
                u(e.data)
              }),
                c.postMessage(
                  JSON.stringify({
                    language: s.language,
                    code: s.code,
                    immediateClose: !0,
                  })
                )
            } else u(a.highlight(s.code, s.grammar, s.language))
          else u(a.util.encode(s.code))
        },
        highlight: function (e, n, t) {
          var r = { code: e, grammar: n, language: t }
          if ((a.hooks.run('before-tokenize', r), !r.grammar))
            throw new Error('The language "' + r.language + '" has no grammar.')
          return (
            (r.tokens = a.tokenize(r.code, r.grammar)),
            a.hooks.run('after-tokenize', r),
            i.stringify(a.util.encode(r.tokens), r.language)
          )
        },
        tokenize: function (e, n) {
          var t = n.rest
          if (t) {
            for (var r in t) n[r] = t[r]
            delete n.rest
          }
          var a = new s()
          return (
            u(a, a.head, e),
            o(e, a, n, a.head, 0),
            (function (e) {
              for (var n = [], t = e.head.next; t !== e.tail; )
                n.push(t.value), (t = t.next)
              return n
            })(a)
          )
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = a.hooks.all
            ;(t[e] = t[e] || []), t[e].push(n)
          },
          run: function (e, n) {
            var t = a.hooks.all[e]
            if (t && t.length) for (var r, i = 0; (r = t[i++]); ) r(n)
          },
        },
        Token: i,
      }
    function i(e, n, t, r) {
      ;(this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (r || '').length)
    }
    function l(e, n, t, r) {
      e.lastIndex = n
      var a = e.exec(t)
      if (a && r && a[1]) {
        var i = a[1].length
        ;(a.index += i), (a[0] = a[0].slice(i))
      }
      return a
    }
    function o(e, n, t, r, s, g) {
      for (var f in t)
        if (t.hasOwnProperty(f) && t[f]) {
          var h = t[f]
          h = Array.isArray(h) ? h : [h]
          for (var d = 0; d < h.length; ++d) {
            if (g && g.cause == f + ',' + d) return
            var v = h[d],
              p = v.inside,
              m = !!v.lookbehind,
              y = !!v.greedy,
              k = v.alias
            if (y && !v.pattern.global) {
              var x = v.pattern.toString().match(/[imsuy]*$/)[0]
              v.pattern = RegExp(v.pattern.source, x + 'g')
            }
            for (
              var b = v.pattern || v, w = r.next, A = s;
              w !== n.tail && !(g && A >= g.reach);
              A += w.value.length, w = w.next
            ) {
              var E = w.value
              if (n.length > e.length) return
              if (!(E instanceof i)) {
                var P,
                  L = 1
                if (y) {
                  if (!(P = l(b, A, e, m)) || P.index >= e.length) break
                  var S = P.index,
                    O = P.index + P[0].length,
                    j = A
                  for (j += w.value.length; S >= j; )
                    j += (w = w.next).value.length
                  if (((A = j -= w.value.length), w.value instanceof i))
                    continue
                  for (
                    var C = w;
                    C !== n.tail && (j < O || 'string' == typeof C.value);
                    C = C.next
                  )
                    L++, (j += C.value.length)
                  L--, (E = e.slice(A, j)), (P.index -= A)
                } else if (!(P = l(b, 0, E, m))) continue
                S = P.index
                var N = P[0],
                  _ = E.slice(0, S),
                  M = E.slice(S + N.length),
                  W = A + E.length
                g && W > g.reach && (g.reach = W)
                var z = w.prev
                if (
                  (_ && ((z = u(n, z, _)), (A += _.length)),
                  c(n, z, L),
                  (w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N))),
                  M && u(n, w, M),
                  L > 1)
                ) {
                  var I = { cause: f + ',' + d, reach: W }
                  o(e, n, t, w.prev, A, I),
                    g && I.reach > g.reach && (g.reach = I.reach)
                }
              }
            }
          }
        }
    }
    function s() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null }
      ;(e.next = n), (this.head = e), (this.tail = n), (this.length = 0)
    }
    function u(e, n, t) {
      var r = n.next,
        a = { value: t, prev: n, next: r }
      return (n.next = a), (r.prev = a), e.length++, a
    }
    function c(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next
      ;(n.next = r), (r.prev = n), (e.length -= a)
    }
    if (
      ((e.Prism = a),
      (i.stringify = function e(n, t) {
        if ('string' == typeof n) return n
        if (Array.isArray(n)) {
          var r = ''
          return (
            n.forEach(function (n) {
              r += e(n, t)
            }),
            r
          )
        }
        var i = {
            type: n.type,
            content: e(n.content, t),
            tag: 'span',
            classes: ['token', n.type],
            attributes: {},
            language: t,
          },
          l = n.alias
        l &&
          (Array.isArray(l)
            ? Array.prototype.push.apply(i.classes, l)
            : i.classes.push(l)),
          a.hooks.run('wrap', i)
        var o = ''
        for (var s in i.attributes)
          o +=
            ' ' +
            s +
            '="' +
            (i.attributes[s] || '').replace(/"/g, '&quot;') +
            '"'
        return (
          '<' +
          i.tag +
          ' class="' +
          i.classes.join(' ') +
          '"' +
          o +
          '>' +
          i.content +
          '</' +
          i.tag +
          '>'
        )
      }),
      !e.document)
    )
      return e.addEventListener
        ? (a.disableWorkerMessageHandler ||
            e.addEventListener(
              'message',
              function (n) {
                var t = JSON.parse(n.data),
                  r = t.language,
                  i = t.code,
                  l = t.immediateClose
                e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close()
              },
              !1
            ),
          a)
        : a
    var g = a.util.currentScript()
    function f() {
      a.manual || a.highlightAll()
    }
    if (
      (g &&
        ((a.filename = g.src),
        g.hasAttribute('data-manual') && (a.manual = !0)),
      !a.manual)
    ) {
      var h = document.readyState
      'loading' === h || ('interactive' === h && g && g.defer)
        ? document.addEventListener('DOMContentLoaded', f)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(f)
        : window.setTimeout(f, 16)
    }
    return a
  })(_self)
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism)
;(Prism.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: 'attr-equals' },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
    /&#x?[\da-f]{1,8};/i,
  ],
}),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside =
    Prism.languages.markup),
  Prism.hooks.add('wrap', function (a) {
    'entity' === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, '&'))
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (a, e) {
      var s = {}
      ;(s['language-' + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e],
      }),
        (s.cdata = /^<!\[CDATA\[|\]\]>$/i)
      var t = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s,
        },
      }
      t['language-' + e] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[e],
      }
      var n = {}
      ;(n[a] = {
        pattern: RegExp(
          '(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
            /__/g,
            function () {
              return a
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: t,
      }),
        Prism.languages.insertBefore('markup', 'cdata', n)
    },
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    value: function (a, e) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          '(^|["\'\\s])(?:' +
            a +
            ')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))',
          'i'
        ),
        lookbehind: !0,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [e, 'language-' + e],
                inside: Prism.languages[e],
              },
              punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
            },
          },
        },
      })
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml)
!(function (s) {
  var e =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
  ;(s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp(
        '@[\\w-](?:[^;{\\s"\']|\\s+(?!\\s)|' + e.source + ')*?(?:;|(?=\\s*\\{))'
      ),
      inside: {
        rule: /^@[\w-]+/,
        'selector-function-argument': {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: 'selector',
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        '\\burl\\((?:' + e.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
        'i'
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
      },
    },
    selector: {
      pattern: RegExp(
        '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
          e.source +
          ')*(?=\\s*\\{)'
      ),
      lookbehind: !0,
    },
    string: { pattern: e, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0,
    },
    punctuation: /[(){};:,]/,
  }),
    (s.languages.css.atrule.inside.rest = s.languages.css)
  var t = s.languages.markup
  t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'))
})(Prism)
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0,
    },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
}
;(Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [
    Prism.languages.clike['class-name'],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      '(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])'
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
  (Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        '((?:^|[^$\\w\\xA0-\\uFFFF."\'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))'
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex,
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/,
      },
    },
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
    'template-string': {
      pattern:
        /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'string-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
    },
  }),
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: 'property',
    },
  }),
  Prism.languages.markup &&
    (Prism.languages.markup.tag.addInlined('script', 'javascript'),
    Prism.languages.markup.tag.addAttribute(
      'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
      'javascript'
    )),
  (Prism.languages.js = Prism.languages.javascript)
Prism.languages.abap = {
  comment: /^\*.*/m,
  string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  'string-template': {
    pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,
    lookbehind: !0,
    alias: 'string',
  },
  'eol-comment': { pattern: /(^|\s)".*/m, lookbehind: !0, alias: 'comment' },
  keyword: {
    pattern:
      /(\s|\.|^)(?:\*-INPUT|\?TO|ABAP-SOURCE|ABBREVIATED|ABS|ABSTRACT|ACCEPT|ACCEPTING|ACCESSPOLICY|ACCORDING|ACOS|ACTIVATION|ACTUAL|ADD|ADD-CORRESPONDING|ADJACENT|AFTER|ALIAS|ALIASES|ALIGN|ALL|ALLOCATE|ALPHA|ANALYSIS|ANALYZER|AND|ANY|APPEND|APPENDAGE|APPENDING|APPLICATION|ARCHIVE|AREA|ARITHMETIC|AS|ASCENDING|ASIN|ASPECT|ASSERT|ASSIGN|ASSIGNED|ASSIGNING|ASSOCIATION|ASYNCHRONOUS|AT|ATAN|ATTRIBUTES|AUTHORITY|AUTHORITY-CHECK|AVG|BACK|BACKGROUND|BACKUP|BACKWARD|BADI|BASE|BEFORE|BEGIN|BETWEEN|BIG|BINARY|BINDING|BIT|BIT-AND|BIT-NOT|BIT-OR|BIT-XOR|BLACK|BLANK|BLANKS|BLOB|BLOCK|BLOCKS|BLUE|BOUND|BOUNDARIES|BOUNDS|BOXED|BREAK-POINT|BT|BUFFER|BY|BYPASSING|BYTE|BYTE-CA|BYTE-CN|BYTE-CO|BYTE-CS|BYTE-NA|BYTE-NS|BYTE-ORDER|C|CA|CALL|CALLING|CASE|CAST|CASTING|CATCH|CEIL|CENTER|CENTERED|CHAIN|CHAIN-INPUT|CHAIN-REQUEST|CHANGE|CHANGING|CHANNELS|CHAR-TO-HEX|CHARACTER|CHARLEN|CHECK|CHECKBOX|CIRCULAR|CI_|CLASS|CLASS-CODING|CLASS-DATA|CLASS-EVENTS|CLASS-METHODS|CLASS-POOL|CLEANUP|CLEAR|CLIENT|CLOB|CLOCK|CLOSE|CN|CNT|CO|COALESCE|CODE|CODING|COLLECT|COLOR|COLUMN|COLUMNS|COL_BACKGROUND|COL_GROUP|COL_HEADING|COL_KEY|COL_NEGATIVE|COL_NORMAL|COL_POSITIVE|COL_TOTAL|COMMENT|COMMENTS|COMMIT|COMMON|COMMUNICATION|COMPARING|COMPONENT|COMPONENTS|COMPRESSION|COMPUTE|CONCAT|CONCATENATE|COND|CONDENSE|CONDITION|CONNECT|CONNECTION|CONSTANTS|CONTEXT|CONTEXTS|CONTINUE|CONTROL|CONTROLS|CONV|CONVERSION|CONVERT|COPIES|COPY|CORRESPONDING|COS|COSH|COUNT|COUNTRY|COVER|CP|CPI|CREATE|CREATING|CRITICAL|CS|CURRENCY|CURRENCY_CONVERSION|CURRENT|CURSOR|CURSOR-SELECTION|CUSTOMER|CUSTOMER-FUNCTION|DANGEROUS|DATA|DATABASE|DATAINFO|DATASET|DATE|DAYLIGHT|DBMAXLEN|DD\/MM\/YY|DD\/MM\/YYYY|DDMMYY|DEALLOCATE|DECIMALS|DECIMAL_SHIFT|DECLARATIONS|DEEP|DEFAULT|DEFERRED|DEFINE|DEFINING|DEFINITION|DELETE|DELETING|DEMAND|DEPARTMENT|DESCENDING|DESCRIBE|DESTINATION|DETAIL|DIALOG|DIRECTORY|DISCONNECT|DISPLAY|DISPLAY-MODE|DISTANCE|DISTINCT|DIV|DIVIDE|DIVIDE-CORRESPONDING|DIVISION|DO|DUMMY|DUPLICATE|DUPLICATES|DURATION|DURING|DYNAMIC|DYNPRO|E|EACH|EDIT|EDITOR-CALL|ELSE|ELSEIF|EMPTY|ENABLED|ENABLING|ENCODING|END|END-ENHANCEMENT-SECTION|END-LINES|END-OF-DEFINITION|END-OF-FILE|END-OF-PAGE|END-OF-SELECTION|ENDAT|ENDCASE|ENDCATCH|ENDCHAIN|ENDCLASS|ENDDO|ENDENHANCEMENT|ENDEXEC|ENDFOR|ENDFORM|ENDFUNCTION|ENDIAN|ENDIF|ENDING|ENDINTERFACE|ENDLOOP|ENDMETHOD|ENDMODULE|ENDON|ENDPROVIDE|ENDSELECT|ENDTRY|ENDWHILE|ENGINEERING|ENHANCEMENT|ENHANCEMENT-POINT|ENHANCEMENT-SECTION|ENHANCEMENTS|ENTRIES|ENTRY|ENVIRONMENT|EQ|EQUAL|EQUIV|ERRORMESSAGE|ERRORS|ESCAPE|ESCAPING|EVENT|EVENTS|EXACT|EXCEPT|EXCEPTION|EXCEPTION-TABLE|EXCEPTIONS|EXCLUDE|EXCLUDING|EXEC|EXECUTE|EXISTS|EXIT|EXIT-COMMAND|EXP|EXPAND|EXPANDING|EXPIRATION|EXPLICIT|EXPONENT|EXPORT|EXPORTING|EXTEND|EXTENDED|EXTENSION|EXTRACT|FAIL|FETCH|FIELD|FIELD-GROUPS|FIELD-SYMBOL|FIELD-SYMBOLS|FIELDS|FILE|FILTER|FILTER-TABLE|FILTERS|FINAL|FIND|FIRST|FIRST-LINE|FIXED-POINT|FKEQ|FKGE|FLOOR|FLUSH|FONT|FOR|FORM|FORMAT|FORWARD|FOUND|FRAC|FRAME|FRAMES|FREE|FRIENDS|FROM|FUNCTION|FUNCTION-POOL|FUNCTIONALITY|FURTHER|GAPS|GE|GENERATE|GET|GIVING|GKEQ|GKGE|GLOBAL|GRANT|GREATER|GREEN|GROUP|GROUPS|GT|HANDLE|HANDLER|HARMLESS|HASHED|HAVING|HDB|HEAD-LINES|HEADER|HEADERS|HEADING|HELP-ID|HELP-REQUEST|HIDE|HIGH|HINT|HOLD|HOTSPOT|I|ICON|ID|IDENTIFICATION|IDENTIFIER|IDS|IF|IGNORE|IGNORING|IMMEDIATELY|IMPLEMENTATION|IMPLEMENTATIONS|IMPLEMENTED|IMPLICIT|IMPORT|IMPORTING|IN|INACTIVE|INCL|INCLUDE|INCLUDES|INCLUDING|INCREMENT|INDEX|INDEX-LINE|INFOTYPES|INHERITING|INIT|INITIAL|INITIALIZATION|INNER|INOUT|INPUT|INSERT|INSTANCES|INTENSIFIED|INTERFACE|INTERFACE-POOL|INTERFACES|INTERNAL|INTERVALS|INTO|INVERSE|INVERTED-DATE|IS|ISO|ITERATOR|ITNO|JOB|JOIN|KEEP|KEEPING|KERNEL|KEY|KEYS|KEYWORDS|KIND|LANGUAGE|LAST|LATE|LAYOUT|LE|LEADING|LEAVE|LEFT|LEFT-JUSTIFIED|LEFTPLUS|LEFTSPACE|LEGACY|LENGTH|LESS|LET|LEVEL|LEVELS|LIKE|LINE|LINE-COUNT|LINE-SELECTION|LINE-SIZE|LINEFEED|LINES|LIST|LIST-PROCESSING|LISTBOX|LITTLE|LLANG|LOAD|LOAD-OF-PROGRAM|LOB|LOCAL|LOCALE|LOCATOR|LOG|LOG-POINT|LOG10|LOGFILE|LOGICAL|LONG|LOOP|LOW|LOWER|LPAD|LPI|LT|M|MAIL|MAIN|MAJOR-ID|MAPPING|MARGIN|MARK|MASK|MATCH|MATCHCODE|MAX|MAXIMUM|MEDIUM|MEMBERS|MEMORY|MESH|MESSAGE|MESSAGE-ID|MESSAGES|MESSAGING|METHOD|METHODS|MIN|MINIMUM|MINOR-ID|MM\/DD\/YY|MM\/DD\/YYYY|MMDDYY|MOD|MODE|MODIF|MODIFIER|MODIFY|MODULE|MOVE|MOVE-CORRESPONDING|MULTIPLY|MULTIPLY-CORRESPONDING|NA|NAME|NAMETAB|NATIVE|NB|NE|NESTED|NESTING|NEW|NEW-LINE|NEW-PAGE|NEW-SECTION|NEXT|NO|NO-DISPLAY|NO-EXTENSION|NO-GAP|NO-GAPS|NO-GROUPING|NO-HEADING|NO-SCROLLING|NO-SIGN|NO-TITLE|NO-TOPOFPAGE|NO-ZERO|NODE|NODES|NON-UNICODE|NON-UNIQUE|NOT|NP|NS|NULL|NUMBER|NUMOFCHAR|O|OBJECT|OBJECTS|OBLIGATORY|OCCURRENCE|OCCURRENCES|OCCURS|OF|OFF|OFFSET|OLE|ON|ONLY|OPEN|OPTION|OPTIONAL|OPTIONS|OR|ORDER|OTHER|OTHERS|OUT|OUTER|OUTPUT|OUTPUT-LENGTH|OVERFLOW|OVERLAY|PACK|PACKAGE|PAD|PADDING|PAGE|PAGES|PARAMETER|PARAMETER-TABLE|PARAMETERS|PART|PARTIALLY|PATTERN|PERCENTAGE|PERFORM|PERFORMING|PERSON|PF|PF-STATUS|PINK|PLACES|POOL|POSITION|POS_HIGH|POS_LOW|PRAGMAS|PRECOMPILED|PREFERRED|PRESERVING|PRIMARY|PRINT|PRINT-CONTROL|PRIORITY|PRIVATE|PROCEDURE|PROCESS|PROGRAM|PROPERTY|PROTECTED|PROVIDE|PUBLIC|PUSHBUTTON|PUT|QUEUE-ONLY|QUICKINFO|RADIOBUTTON|RAISE|RAISING|RANGE|RANGES|RAW|READ|READ-ONLY|READER|RECEIVE|RECEIVED|RECEIVER|RECEIVING|RED|REDEFINITION|REDUCE|REDUCED|REF|REFERENCE|REFRESH|REGEX|REJECT|REMOTE|RENAMING|REPLACE|REPLACEMENT|REPLACING|REPORT|REQUEST|REQUESTED|RESERVE|RESET|RESOLUTION|RESPECTING|RESPONSIBLE|RESULT|RESULTS|RESUMABLE|RESUME|RETRY|RETURN|RETURNCODE|RETURNING|RIGHT|RIGHT-JUSTIFIED|RIGHTPLUS|RIGHTSPACE|RISK|RMC_COMMUNICATION_FAILURE|RMC_INVALID_STATUS|RMC_SYSTEM_FAILURE|ROLE|ROLLBACK|ROUND|ROWS|RTTI|RUN|SAP|SAP-SPOOL|SAVING|SCALE_PRESERVING|SCALE_PRESERVING_SCIENTIFIC|SCAN|SCIENTIFIC|SCIENTIFIC_WITH_LEADING_ZERO|SCREEN|SCROLL|SCROLL-BOUNDARY|SCROLLING|SEARCH|SECONDARY|SECONDS|SECTION|SELECT|SELECT-OPTIONS|SELECTION|SELECTION-SCREEN|SELECTION-SET|SELECTION-SETS|SELECTION-TABLE|SELECTIONS|SELECTOR|SEND|SEPARATE|SEPARATED|SET|SHARED|SHIFT|SHORT|SHORTDUMP-ID|SIGN|SIGN_AS_POSTFIX|SIMPLE|SIN|SINGLE|SINH|SIZE|SKIP|SKIPPING|SMART|SOME|SORT|SORTABLE|SORTED|SOURCE|SPACE|SPECIFIED|SPLIT|SPOOL|SPOTS|SQL|SQLSCRIPT|SQRT|STABLE|STAMP|STANDARD|START-OF-SELECTION|STARTING|STATE|STATEMENT|STATEMENTS|STATIC|STATICS|STATUSINFO|STEP-LOOP|STOP|STRLEN|STRUCTURE|STRUCTURES|STYLE|SUBKEY|SUBMATCHES|SUBMIT|SUBROUTINE|SUBSCREEN|SUBSTRING|SUBTRACT|SUBTRACT-CORRESPONDING|SUFFIX|SUM|SUMMARY|SUMMING|SUPPLIED|SUPPLY|SUPPRESS|SWITCH|SWITCHSTATES|SYMBOL|SYNCPOINTS|SYNTAX|SYNTAX-CHECK|SYNTAX-TRACE|SYSTEM-CALL|SYSTEM-EXCEPTIONS|SYSTEM-EXIT|TAB|TABBED|TABLE|TABLES|TABLEVIEW|TABSTRIP|TAN|TANH|TARGET|TASK|TASKS|TEST|TESTING|TEXT|TEXTPOOL|THEN|THROW|TIME|TIMES|TIMESTAMP|TIMEZONE|TITLE|TITLE-LINES|TITLEBAR|TO|TOKENIZATION|TOKENS|TOP-LINES|TOP-OF-PAGE|TRACE-FILE|TRACE-TABLE|TRAILING|TRANSACTION|TRANSFER|TRANSFORMATION|TRANSLATE|TRANSPORTING|TRMAC|TRUNC|TRUNCATE|TRUNCATION|TRY|TYPE|TYPE-POOL|TYPE-POOLS|TYPES|ULINE|UNASSIGN|UNDER|UNICODE|UNION|UNIQUE|UNIT|UNIT_CONVERSION|UNIX|UNPACK|UNTIL|UNWIND|UP|UPDATE|UPPER|USER|USER-COMMAND|USING|UTF-8|VALID|VALUE|VALUE-REQUEST|VALUES|VARY|VARYING|VERIFICATION-MESSAGE|VERSION|VIA|VIEW|VISIBLE|WAIT|WARNING|WHEN|WHENEVER|WHERE|WHILE|WIDTH|WINDOW|WINDOWS|WITH|WITH-HEADING|WITH-TITLE|WITHOUT|WORD|WORK|WRITE|WRITER|X|XML|XOR|XSD|XSTRLEN|YELLOW|YES|YYMMDD|Z|ZERO|ZONE)(?![\w-])/i,
    lookbehind: !0,
  },
  number: /\b\d+\b/,
  operator: {
    pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
    lookbehind: !0,
  },
  'string-operator': {
    pattern: /(\s)&&?(?=\s)/,
    lookbehind: !0,
    alias: 'keyword',
  },
  'token-operator': [
    {
      pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
      lookbehind: !0,
      alias: 'punctuation',
    },
    { pattern: /[|{}]/, alias: 'punctuation' },
  ],
  punctuation: /[,.:()]/,
}
!(function (n) {
  var i =
    '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)'
  n.languages.abnf = {
    comment: /;.*/,
    string: {
      pattern: /(?:%[is])?"[^"\n\r]*"/,
      greedy: !0,
      inside: { punctuation: /^%[is]/ },
    },
    range: {
      pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
      alias: 'number',
    },
    terminal: {
      pattern:
        /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
      alias: 'number',
    },
    repetition: {
      pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
      lookbehind: !0,
      alias: 'operator',
    },
    definition: {
      pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
      lookbehind: !0,
      alias: 'keyword',
      inside: { punctuation: /<|>/ },
    },
    'core-rule': {
      pattern: RegExp('(?:(^|[^<\\w-])' + i + '|<' + i + '>)(?![\\w-])', 'i'),
      lookbehind: !0,
      alias: ['rule', 'constant'],
      inside: { punctuation: /<|>/ },
    },
    rule: {
      pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
      lookbehind: !0,
      inside: { punctuation: /<|>/ },
    },
    operator: /=\/?|\//,
    punctuation: /[()\[\]]/,
  }
})(Prism)
;(Prism.languages.actionscript = Prism.languages.extend('javascript', {
  keyword:
    /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
  operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
})),
  (Prism.languages.actionscript['class-name'].alias = 'function'),
  delete Prism.languages.actionscript.parameter,
  delete Prism.languages.actionscript['literal-property'],
  Prism.languages.markup &&
    Prism.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern:
          /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: Prism.languages.markup,
      },
    })
Prism.languages.ada = {
  comment: /--.*/,
  string: /"(?:""|[^"\r\f\n])*"/,
  number: [
    {
      pattern:
        /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i,
    },
    { pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i },
  ],
  attribute: { pattern: /\b'\w+/, alias: 'attr-name' },
  keyword:
    /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|or|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
  boolean: /\b(?:false|true)\b/i,
  operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
  punctuation: /\.\.?|[,;():]/,
  char: /'.'/,
  variable: /\b[a-z](?:\w)*\b/i,
}
;(Prism.languages.antlr4 = {
  comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  string: { pattern: /'(?:\\.|[^\\'\r\n])*'/, greedy: !0 },
  'character-class': {
    pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
    greedy: !0,
    alias: 'regex',
    inside: {
      range: {
        pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
        lookbehind: !0,
        alias: 'punctuation',
      },
      escape:
        /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
      punctuation: /[\[\]]/,
    },
  },
  action: {
    pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
    greedy: !0,
    inside: {
      content: { pattern: /(\{)[\s\S]+(?=\})/, lookbehind: !0 },
      punctuation: /[{}]/,
    },
  },
  command: {
    pattern:
      /(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
    lookbehind: !0,
    inside: { function: /\b\w+(?=\s*(?:[,(]|$))/, punctuation: /[,()]/ },
  },
  annotation: { pattern: /@\w+(?:::\w+)*/, alias: 'keyword' },
  label: { pattern: /#[ \t]*\w+/, alias: 'punctuation' },
  keyword:
    /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
  definition: [
    { pattern: /\b[a-z]\w*(?=\s*:)/, alias: ['rule', 'class-name'] },
    { pattern: /\b[A-Z]\w*(?=\s*:)/, alias: ['token', 'constant'] },
  ],
  constant: /\b[A-Z][A-Z_]*\b/,
  operator: /\.\.|->|[|~]|[*+?]\??/,
  punctuation: /[;:()=]/,
}),
  (Prism.languages.g4 = Prism.languages.antlr4)
Prism.languages.apacheconf = {
  comment: /#.*/,
  'directive-inline': {
    pattern:
      /(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
    lookbehind: !0,
    alias: 'property',
  },
  'directive-block': {
    pattern:
      /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,
    inside: {
      'directive-block': {
        pattern: /^<\/?\w+/,
        inside: { punctuation: /^<\/?/ },
        alias: 'tag',
      },
      'directive-block-parameter': {
        pattern: /.*[^>]/,
        inside: {
          punctuation: /:/,
          string: {
            pattern: /("|').*\1/,
            inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
          },
        },
        alias: 'attr-value',
      },
      punctuation: />/,
    },
    alias: 'tag',
  },
  'directive-flags': { pattern: /\[(?:[\w=],?)+\]/, alias: 'keyword' },
  string: {
    pattern: /("|').*\1/,
    inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
  },
  variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
  regex: /\^?.*\$|\^.*\$?/,
}
Prism.languages.apl = {
  comment: /(?:⍝|#[! ]).*$/m,
  string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 },
  number:
    /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,
  statement: /:[A-Z][a-z][A-Za-z]*\b/,
  'system-function': { pattern: /⎕[A-Z]+/i, alias: 'function' },
  constant: /[⍬⌾#⎕⍞]/,
  function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
  'monadic-operator': { pattern: /[\\\/⌿⍀¨⍨⌶&∥]/, alias: 'operator' },
  'dyadic-operator': { pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/, alias: 'operator' },
  assignment: { pattern: /←/, alias: 'keyword' },
  punctuation: /[\[;\]()◇⋄]/,
  dfn: { pattern: /[{}⍺⍵⍶⍹∇⍫:]/, alias: 'builtin' },
}
Prism.languages.applescript = {
  comment: [
    /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
    /--.+/,
    /#.+/,
  ],
  string: /"(?:\\.|[^"\\\r\n])*"/,
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,
  operator: [
    /[&=≠≤≥*+\-\/÷^]|[<>]=?/,
    /\b(?:(?:begin|end|start)s? with|(?:contains?|(?:does not|doesn't) contain)|(?:is|isn't|is not) (?:contained by|in)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:comes|(?:does not|doesn't) come) (?:after|before)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equal to|equals|is not|isn't)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|as|div|mod|not|or))\b/,
  ],
  keyword:
    /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
  'class-name':
    /\b(?:POSIX file|RGB color|alias|application|boolean|centimeters|centimetres|class|constant|cubic centimeters|cubic centimetres|cubic feet|cubic inches|cubic meters|cubic metres|cubic yards|date|degrees Celsius|degrees Fahrenheit|degrees Kelvin|feet|file|gallons|grams|inches|integer|kilograms|kilometers|kilometres|list|liters|litres|meters|metres|miles|number|ounces|pounds|quarts|real|record|reference|script|square feet|square kilometers|square kilometres|square meters|square metres|square miles|square yards|text|yards)\b/,
  punctuation: /[{}():,¬«»《》]/,
}
Prism.languages.aql = {
  comment: /\/\/.*|\/\*[\s\S]*?\*\//,
  property: {
    pattern:
      /([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: { pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/, greedy: !0 },
  identifier: { pattern: /([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/, greedy: !0 },
  variable: /@@?\w+/,
  keyword: [
    { pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i, lookbehind: !0 },
    /\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,
    { pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i, lookbehind: !0 },
    { pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/, lookbehind: !0 },
    { pattern: /\bOPTIONS(?=\s*\{)/i },
  ],
  function: /\b(?!\d)\w+(?=\s*\()/,
  boolean: /\b(?:false|true)\b/i,
  range: { pattern: /\.\./, alias: 'operator' },
  number: [
    /\b0b[01]+/i,
    /\b0x[0-9a-f]+/i,
    /(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i,
  ],
  operator: /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
  punctuation: /::|[?.:,;()[\]{}]/,
}
;(Prism.languages.c = Prism.languages.extend('clike', {
  comment: {
    pattern:
      /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  'class-name': {
    pattern:
      /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
  Prism.languages.insertBefore('c', 'string', {
    char: {
      pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
      greedy: !0,
    },
  }),
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      pattern:
        /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
      inside: {
        string: [
          { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
          Prism.languages.c.string,
        ],
        char: Prism.languages.c.char,
        comment: Prism.languages.c.comment,
        'macro-name': [
          { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: 'function',
          },
        ],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: 'keyword',
        },
        'directive-hash': /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
      },
    },
  }),
  Prism.languages.insertBefore('c', 'function', {
    constant:
      /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
  }),
  delete Prism.languages.c.boolean
!(function (e) {
  var t =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    n = '\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b'.replace(
      /<keyword>/g,
      function () {
        return t.source
      }
    )
  ;(e.languages.cpp = e.languages.extend('c', {
    'class-name': [
      {
        pattern: RegExp(
          '(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+'.replace(
            /<keyword>/g,
            function () {
              return t.source
            }
          )
        ),
        lookbehind: !0,
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
    ],
    keyword: t,
    number: {
      pattern:
        /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0,
    },
    operator:
      />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/,
  })),
    e.languages.insertBefore('cpp', 'string', {
      module: {
        pattern: RegExp(
          '(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
            '<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>'.replace(
              /<mod-name>/g,
              function () {
                return n
              }
            ) +
            ')'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./,
        },
      },
      'raw-string': {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: 'string',
        greedy: !0,
      },
    }),
    e.languages.insertBefore('cpp', 'keyword', {
      'generic-function': {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: 'class-name',
            inside: e.languages.cpp,
          },
        },
      },
    }),
    e.languages.insertBefore('cpp', 'operator', {
      'double-colon': { pattern: /::/, alias: 'punctuation' },
    }),
    e.languages.insertBefore('cpp', 'class-name', {
      'base-clause': {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend('cpp', {}),
      },
    }),
    e.languages.insertBefore(
      'inside',
      'double-colon',
      { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
      e.languages.cpp['base-clause']
    )
})(Prism)
;(Prism.languages.arduino = Prism.languages.extend('cpp', {
  keyword:
    /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
  constant:
    /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
  builtin:
    /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/,
})),
  (Prism.languages.ino = Prism.languages.arduino)
Prism.languages.arff = {
  comment: /%.*/,
  string: { pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  keyword: /@(?:attribute|data|end|relation)\b/i,
  number: /\b\d+(?:\.\d+)?\b/,
  punctuation: /[{},]/,
}
!(function (t) {
  var n = {
      pattern:
        /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
      lookbehind: !0,
      inside: {
        quoted: {
          pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
          inside: { punctuation: /^[$`]|[$`]$/ },
        },
        interpreted: {
          pattern: /'(?:[^'\\]|\\.)*'/,
          inside: { punctuation: /^'|'$/ },
        },
        string: /"(?:[^"\\]|\\.)*"/,
        variable: /\w+(?==)/,
        punctuation: /^\[|\]$|,/,
        operator: /=/,
        'attr-value': /(?!^\s+$).+/,
      },
    },
    i = (t.languages.asciidoc = {
      'comment-block': {
        pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
        alias: 'comment',
      },
      table: {
        pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
        inside: {
          specifiers: {
            pattern:
              /(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,
            alias: 'attr-value',
          },
          punctuation: { pattern: /(^|[^\\])[|!]=*/, lookbehind: !0 },
        },
      },
      'passthrough-block': {
        pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: { punctuation: /^\++|\++$/ },
      },
      'literal-block': {
        pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: { punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/ },
      },
      'other-block': {
        pattern:
          /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: { punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/ },
      },
      'list-punctuation': {
        pattern:
          /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
        lookbehind: !0,
        alias: 'punctuation',
      },
      'list-label': {
        pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
        lookbehind: !0,
        alias: 'symbol',
      },
      'indented-block': {
        pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
        lookbehind: !0,
      },
      comment: /^\/\/.*/m,
      title: {
        pattern:
          /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
        alias: 'important',
        inside: { punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/ },
      },
      'attribute-entry': {
        pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
        alias: 'tag',
      },
      attributes: n,
      hr: { pattern: /^'{3,}$/m, alias: 'punctuation' },
      'page-break': { pattern: /^<{3,}$/m, alias: 'punctuation' },
      admonition: {
        pattern: /^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,
        alias: 'keyword',
      },
      callout: [
        {
          pattern: /(^[ \t]*)<?\d*>/m,
          lookbehind: !0,
          alias: 'symbol',
        },
        { pattern: /<\d+>/, alias: 'symbol' },
      ],
      macro: {
        pattern:
          /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
        inside: {
          function: /^[a-z\d-]+(?=:)/,
          punctuation: /^::?/,
          attributes: {
            pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: n.inside,
          },
        },
      },
      inline: {
        pattern:
          /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
        lookbehind: !0,
        inside: {
          attributes: n,
          url: {
            pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
            inside: {
              punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/,
            },
          },
          'attribute-ref': {
            pattern: /^\{.+\}$/,
            inside: {
              variable: {
                pattern: /(^\{)[a-z\d,+_-]+/,
                lookbehind: !0,
              },
              operator: /^[=?!#%@$]|!(?=[:}])/,
              punctuation: /^\{|\}$|::?/,
            },
          },
          italic: {
            pattern: /^(['_])[\s\S]+\1$/,
            inside: { punctuation: /^(?:''?|__?)|(?:''?|__?)$/ },
          },
          bold: {
            pattern: /^\*[\s\S]+\*$/,
            inside: { punctuation: /^\*\*?|\*\*?$/ },
          },
          punctuation:
            /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/,
        },
      },
      replacement: { pattern: /\((?:C|R|TM)\)/, alias: 'builtin' },
      entity: /&#?[\da-z]{1,8};/i,
      'line-continuation': {
        pattern: /(^| )\+$/m,
        lookbehind: !0,
        alias: 'punctuation',
      },
    })
  function e(t) {
    for (var n = {}, e = 0, a = (t = t.split(' ')).length; e < a; e++)
      n[t[e]] = i[t[e]]
    return n
  }
  ;(n.inside.interpreted.inside.rest = e('macro inline replacement entity')),
    (i['passthrough-block'].inside.rest = e('macro')),
    (i['literal-block'].inside.rest = e('callout')),
    (i.table.inside.rest = e(
      'comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation'
    )),
    (i['other-block'].inside.rest = e(
      'table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation'
    )),
    (i.title.inside.rest = e('macro inline replacement entity')),
    t.hooks.add('wrap', function (t) {
      'entity' === t.type &&
        (t.attributes.title = t.content.replace(/&amp;/, '&'))
    }),
    (t.languages.adoc = t.languages.asciidoc)
})(Prism)
!(function (e) {
  function n(e, n) {
    return e.replace(/<<(\d+)>>/g, function (e, s) {
      return '(?:' + n[+s] + ')'
    })
  }
  function s(e, s, a) {
    return RegExp(n(e, s), a || '')
  }
  function a(e, n) {
    for (var s = 0; s < n; s++)
      e = e.replace(/<<self>>/g, function () {
        return '(?:' + e + ')'
      })
    return e.replace(/<<self>>/g, '[^\\s\\S]')
  }
  var t =
      'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
    r = 'class enum interface record struct',
    i =
      'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
    o =
      'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
  function l(e) {
    return '\\b(?:' + e.trim().replace(/ /g, '|') + ')\\b'
  }
  var d = l(r),
    p = RegExp(l(t + ' ' + r + ' ' + i + ' ' + o)),
    c = l(r + ' ' + i + ' ' + o),
    u = l(t + ' ' + r + ' ' + o),
    g = a('<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>', 2),
    b = a('\\((?:[^()]|<<self>>)*\\)', 2),
    h = '@?\\b[A-Za-z_]\\w*\\b',
    f = n('<<0>>(?:\\s*<<1>>)?', [h, g]),
    m = n('(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*', [c, f]),
    k = '\\[\\s*(?:,\\s*)*\\]',
    y = n('<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?', [m, k]),
    w = n('[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>', [g, b, k]),
    v = n('\\(<<0>>+(?:,<<0>>+)+\\)', [w]),
    x = n('(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?', [v, m, k]),
    $ = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
    _ = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
    B = '"(?:\\\\.|[^\\\\"\r\n])*"'
  ;(e.languages.csharp = e.languages.extend('clike', {
    string: [
      {
        pattern: s('(^|[^$\\\\])<<0>>', ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
        lookbehind: !0,
        greedy: !0,
      },
      {
        pattern: s('(^|[^@$\\\\])<<0>>', [B]),
        lookbehind: !0,
        greedy: !0,
      },
    ],
    'class-name': [
      {
        pattern: s('(\\busing\\s+static\\s+)<<0>>(?=\\s*;)', [m]),
        lookbehind: !0,
        inside: $,
      },
      {
        pattern: s('(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)', [h, x]),
        lookbehind: !0,
        inside: $,
      },
      { pattern: s('(\\busing\\s+)<<0>>(?=\\s*=)', [h]), lookbehind: !0 },
      {
        pattern: s('(\\b<<0>>\\s+)<<1>>', [d, f]),
        lookbehind: !0,
        inside: $,
      },
      {
        pattern: s('(\\bcatch\\s*\\(\\s*)<<0>>', [m]),
        lookbehind: !0,
        inside: $,
      },
      { pattern: s('(\\bwhere\\s+)<<0>>', [h]), lookbehind: !0 },
      {
        pattern: s('(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>', [y]),
        lookbehind: !0,
        inside: $,
      },
      {
        pattern: s(
          '\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))',
          [x, u, h]
        ),
        inside: $,
      },
    ],
    keyword: p,
    number:
      /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/,
  })),
    e.languages.insertBefore('csharp', 'number', {
      range: { pattern: /\.\./, alias: 'operator' },
    }),
    e.languages.insertBefore('csharp', 'punctuation', {
      'named-parameter': {
        pattern: s('([(,]\\s*)<<0>>(?=\\s*:)', [h]),
        lookbehind: !0,
        alias: 'punctuation',
      },
    }),
    e.languages.insertBefore('csharp', 'class-name', {
      namespace: {
        pattern: s(
          '(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])',
          [h]
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
      'type-expression': {
        pattern: s(
          '(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))',
          [b]
        ),
        lookbehind: !0,
        alias: 'class-name',
        inside: $,
      },
      'return-type': {
        pattern: s(
          '<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))',
          [x, m]
        ),
        inside: $,
        alias: 'class-name',
      },
      'constructor-invocation': {
        pattern: s('(\\bnew\\s+)<<0>>(?=\\s*[[({])', [x]),
        lookbehind: !0,
        inside: $,
        alias: 'class-name',
      },
      'generic-method': {
        pattern: s('<<0>>\\s*<<1>>(?=\\s*\\()', [h, g]),
        inside: {
          function: s('^<<0>>', [h]),
          generic: {
            pattern: RegExp(g),
            alias: 'class-name',
            inside: $,
          },
        },
      },
      'type-list': {
        pattern: s(
          '\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))',
          [d, f, h, x, p.source, b, '\\bnew\\s*\\(\\s*\\)']
        ),
        lookbehind: !0,
        inside: {
          'record-arguments': {
            pattern: s('(^(?!new\\s*\\()<<0>>\\s*)<<1>>', [f, b]),
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.csharp,
          },
          keyword: p,
          'class-name': { pattern: RegExp(x), greedy: !0, inside: $ },
          punctuation: /[,()]/,
        },
      },
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: 'property',
        inside: {
          directive: {
            pattern:
              /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
            lookbehind: !0,
            alias: 'keyword',
          },
        },
      },
    })
  var E = B + '|' + _,
    R = n('/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>', [E]),
    z = a(n('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [R]), 2),
    S =
      '\\b(?:assembly|event|field|method|module|param|property|return|type)\\b',
    j = n('<<0>>(?:\\s*\\(<<1>>*\\))?', [m, z])
  e.languages.insertBefore('csharp', 'class-name', {
    attribute: {
      pattern: s(
        '((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])',
        [S, j]
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: {
          pattern: s('^<<0>>(?=\\s*:)', [S]),
          alias: 'keyword',
        },
        'attribute-arguments': {
          pattern: s('\\(<<0>>*\\)', [z]),
          inside: e.languages.csharp,
        },
        'class-name': {
          pattern: RegExp(m),
          inside: { punctuation: /\./ },
        },
        punctuation: /[:,]/,
      },
    },
  })
  var A = ':[^}\r\n]+',
    F = a(n('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [R]), 2),
    P = n('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [F, A]),
    U = a(
      n('[^"\'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)', [
        E,
      ]),
      2
    ),
    Z = n('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [U, A])
  function q(n, a) {
    return {
      interpolation: {
        pattern: s('((?:^|[^{])(?:\\{\\{)*)<<0>>', [n]),
        lookbehind: !0,
        inside: {
          'format-string': {
            pattern: s('(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)', [a, A]),
            lookbehind: !0,
            inside: { punctuation: /^:/ },
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: 'language-csharp',
            inside: e.languages.csharp,
          },
        },
      },
      string: /[\s\S]+/,
    }
  }
  e.languages.insertBefore('csharp', 'string', {
    'interpolation-string': [
      {
        pattern: s(
          '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
          [P]
        ),
        lookbehind: !0,
        greedy: !0,
        inside: q(P, F),
      },
      {
        pattern: s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [Z]),
        lookbehind: !0,
        greedy: !0,
        inside: q(Z, U),
      },
    ],
    char: { pattern: RegExp(_), greedy: !0 },
  }),
    (e.languages.dotnet = e.languages.cs = e.languages.csharp)
})(Prism)
;(Prism.languages.aspnet = Prism.languages.extend('markup', {
  'page-directive': {
    pattern: /<%\s*@.*%>/,
    alias: 'tag',
    inside: {
      'page-directive': {
        pattern:
          /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
        alias: 'tag',
      },
      rest: Prism.languages.markup.tag.inside,
    },
  },
  directive: {
    pattern: /<%.*%>/,
    alias: 'tag',
    inside: {
      directive: { pattern: /<%\s*?[$=%#:]{0,2}|%>/, alias: 'tag' },
      rest: Prism.languages.csharp,
    },
  },
})),
  (Prism.languages.aspnet.tag.pattern =
    /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/),
  Prism.languages.insertBefore(
    'inside',
    'punctuation',
    { directive: Prism.languages.aspnet.directive },
    Prism.languages.aspnet.tag.inside['attr-value']
  ),
  Prism.languages.insertBefore('aspnet', 'comment', {
    'asp-comment': {
      pattern: /<%--[\s\S]*?--%>/,
      alias: ['asp', 'comment'],
    },
  }),
  Prism.languages.insertBefore(
    'aspnet',
    Prism.languages.javascript ? 'script' : 'tag',
    {
      'asp-script': {
        pattern:
          /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        alias: ['asp', 'script'],
        inside: Prism.languages.csharp || {},
      },
    }
  )
Prism.languages.asm6502 = {
  comment: /;.*/,
  directive: { pattern: /\.\w+(?= )/, alias: 'property' },
  string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
  'op-code': {
    pattern:
      /\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,
    alias: 'keyword',
  },
  'hex-number': { pattern: /#?\$[\da-f]{1,4}\b/i, alias: 'number' },
  'binary-number': { pattern: /#?%[01]+\b/, alias: 'number' },
  'decimal-number': { pattern: /#?\b\d+\b/, alias: 'number' },
  register: { pattern: /\b[xya]\b/i, alias: 'variable' },
  punctuation: /[(),:]/,
}
Prism.languages.autohotkey = {
  comment: [
    { pattern: /(^|\s);.*/, lookbehind: !0 },
    {
      pattern:
        /(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,
      lookbehind: !0,
      greedy: !0,
    },
  ],
  tag: { pattern: /^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m, lookbehind: !0 },
  string: /"(?:[^"\n\r]|"")*"/,
  variable: /%\w+%/,
  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
  operator:
    /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
  boolean: /\b(?:false|true)\b/,
  command: {
    pattern:
      /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
    alias: 'selector',
  },
  constant:
    /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,
  builtin:
    /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,
  symbol:
    /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
  directive: { pattern: /#[a-z]+\b/i, alias: 'important' },
  keyword:
    /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,
  function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,
  punctuation: /[{}[\]():,]/,
}
Prism.languages.autoit = {
  comment: [
    /;.*/,
    {
      pattern:
        /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,
      lookbehind: !0,
    },
  ],
  url: {
    pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
    greedy: !0,
    inside: { variable: /([%$@])\w+\1/ },
  },
  directive: {
    pattern: /(^[\t ]*)#[\w-]+/m,
    lookbehind: !0,
    alias: 'keyword',
  },
  function: /\b\w+(?=\()/,
  variable: /[$@]\w+/,
  keyword:
    /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
  number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
  boolean: /\b(?:False|True)\b/i,
  operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,
  punctuation: /[\[\]().,:]/,
}
!(function (e) {
  var t =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: 'punctuation',
      inside: null,
    },
    a = {
      bash: n,
      environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
              /^\$\(\(/,
            ],
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator:
              /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/,
          },
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: { variable: /^\$\(|^`|\)$|`$/ },
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + t),
              lookbehind: !0,
              alias: 'constant',
            },
          },
        },
        /\$(?:\w+|[#?*!@$])/,
      ],
      entity:
        /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
    }
  ;(e.languages.bash = {
    shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
    'function-name': [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: 'function',
      },
      { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
    ],
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: !0,
    },
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
          lookbehind: !0,
          alias: 'constant',
        },
      },
      alias: 'variable',
      lookbehind: !0,
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: { bash: n },
      },
      {
        pattern:
          /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
      { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: { entity: a.entity },
      },
    ],
    environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
    variable: a.variable,
    function: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    keyword: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    builtin: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: 'class-name',
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
    operator: {
      pattern:
        /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': { pattern: /^\d/, alias: 'important' },
      },
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0,
    },
  }),
    (n.inside = e.languages.bash)
  for (
    var o = [
        'comment',
        'function-name',
        'for-or-select',
        'assign-left',
        'string',
        'environment',
        'function',
        'keyword',
        'builtin',
        'boolean',
        'file-descriptor',
        'operator',
        'punctuation',
        'number',
      ],
      s = a.variable[1].inside,
      i = 0;
    i < o.length;
    i++
  )
    s[o[i]] = e.languages.bash[o[i]]
  e.languages.shell = e.languages.bash
})(Prism)
Prism.languages.basic = {
  comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
  string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/, greedy: !0 },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
  keyword:
    /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
  function:
    /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
  operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
  punctuation: /[,;:()]/,
}
!(function (e) {
  var r = /%%?[~:\w]+%?|!\S+!/,
    t = {
      pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
      alias: 'attr-name',
      inside: { punctuation: /:/ },
    },
    n = /"(?:[\\"]"|[^"])*"(?!")/,
    i = /(?:\b|-)\d+\b/
  e.languages.batch = {
    comment: [
      /^::.*/m,
      {
        pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
      },
    ],
    label: { pattern: /^:.*/m, alias: 'property' },
    command: [
      {
        pattern:
          /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,
        lookbehind: !0,
        inside: {
          keyword: /\b(?:do|in)\b|^for\b/i,
          string: n,
          parameter: t,
          variable: r,
          number: i,
          punctuation: /[()',]/,
        },
      },
      {
        pattern:
          /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,
        lookbehind: !0,
        inside: {
          keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,
          string: n,
          parameter: t,
          variable: r,
          number: i,
          operator: /\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i,
        },
      },
      {
        pattern: /((?:^|[&()])[ \t]*)else\b/im,
        lookbehind: !0,
        inside: { keyword: /^else\b/i },
      },
      {
        pattern:
          /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        inside: {
          keyword: /^set\b/i,
          string: n,
          parameter: t,
          variable: [r, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
          number: i,
          operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
          punctuation: /[()',]/,
        },
      },
      {
        pattern:
          /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,
        lookbehind: !0,
        inside: {
          keyword: /^\w+\b/,
          string: n,
          parameter: t,
          label: {
            pattern: /(^\s*):\S+/m,
            lookbehind: !0,
            alias: 'property',
          },
          variable: r,
          number: i,
          operator: /\^/,
        },
      },
    ],
    operator: /[&@]/,
    punctuation: /[()']/,
  }
})(Prism)
;(Prism.languages.bbcode = {
  tag: {
    pattern:
      /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
    inside: {
      tag: {
        pattern: /^\[\/?[^\s=\]]+/,
        inside: { punctuation: /^\[\/?/ },
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
        inside: {
          punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }],
        },
      },
      punctuation: /\]/,
      'attr-name': /[^\s=\]]+/,
    },
  },
}),
  (Prism.languages.shortcode = Prism.languages.bbcode)
;(Prism.languages.bison = Prism.languages.extend('c', {})),
  Prism.languages.insertBefore('bison', 'comment', {
    bison: {
      pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
      inside: {
        c: {
          pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
          inside: {
            delimiter: {
              pattern: /^%?\{|%?\}$/,
              alias: 'punctuation',
            },
            'bison-variable': {
              pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
              alias: 'variable',
              inside: { punctuation: /<|>/ },
            },
            rest: Prism.languages.c,
          },
        },
        comment: Prism.languages.c.comment,
        string: Prism.languages.c.string,
        property: /\S+(?=:)/,
        keyword: /%\w+/,
        number: {
          pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
          lookbehind: !0,
        },
        punctuation: /%[%?]|[|:;\[\]<>]/,
      },
    },
  })
;(Prism.languages.bnf = {
  string: { pattern: /"[^\r\n"]*"|'[^\r\n']*'/ },
  definition: {
    pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
    alias: ['rule', 'keyword'],
    inside: { punctuation: /^<|>$/ },
  },
  rule: { pattern: /<[^<>\r\n\t]+>/, inside: { punctuation: /^<|>$/ } },
  operator: /::=|[|()[\]{}*+?]|\.{3}/,
}),
  (Prism.languages.rbnf = Prism.languages.bnf)
Prism.languages.brainfuck = {
  pointer: { pattern: /<|>/, alias: 'keyword' },
  increment: { pattern: /\+/, alias: 'inserted' },
  decrement: { pattern: /-/, alias: 'deleted' },
  branching: { pattern: /\[|\]/, alias: 'important' },
  operator: /[.,]/,
  comment: /\S+/,
}
;(Prism.languages.brightscript = {
  comment: /(?:\brem|').*/i,
  'directive-statement': {
    pattern: /(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,
    lookbehind: !0,
    alias: 'property',
    inside: {
      'error-message': { pattern: /(^#error).+/, lookbehind: !0 },
      directive: {
        pattern: /^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,
        alias: 'keyword',
      },
      expression: { pattern: /[\s\S]+/, inside: null },
    },
  },
  property: {
    pattern: /([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: { pattern: /"(?:[^"\r\n]|"")*"(?!")/, greedy: !0 },
  'class-name': { pattern: /(\bAs[\t ]+)\w+/i, lookbehind: !0 },
  keyword:
    /\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,
  boolean: /\b(?:false|true)\b/i,
  function: /\b(?!\d)\w+(?=[\t ]*\()/,
  number: /(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,
  operator: /--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,
  punctuation: /[.,;()[\]{}]/,
  constant: /\b(?:LINE_NUM)\b/i,
}),
  (Prism.languages.brightscript[
    'directive-statement'
  ].inside.expression.inside = Prism.languages.brightscript)
Prism.languages.bro = {
  comment: {
    pattern: /(^|[^\\$])#.*/,
    lookbehind: !0,
    inside: { italic: /\b(?:FIXME|TODO|XXX)\b/ },
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  boolean: /\b[TF]\b/,
  function: {
    pattern: /(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,
    lookbehind: !0,
  },
  builtin:
    /(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,
  constant: { pattern: /(\bconst[ \t]+)\w+/i, lookbehind: !0 },
  keyword:
    /\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  punctuation: /[{}[\];(),.:]/,
}
Prism.languages.cil = {
  comment: /\/\/.*/,
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  directive: {
    pattern: /(^|\W)\.[a-z]+(?=\s)/,
    lookbehind: !0,
    alias: 'class-name',
  },
  variable: /\[[\w\.]+\]/,
  keyword:
    /\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|u?int(?:8|16|32|64)?|iant|idispatch|implements|import|initonly|instance|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,
  function:
    /\b(?:(?:constrained|no|readonly|tail|unaligned|volatile)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.\d+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.\d+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|castclass|ldvirtftn|beq(?:\.s)?|ckfinite|ldsflda|ldtoken|localloc|mkrefany|rethrow|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\b/,
  boolean: /\b(?:false|true)\b/,
  number: /\b-?(?:0x[0-9a-f]+|\d+)(?:\.[0-9a-f]+)?\b/i,
  punctuation: /[{}[\];(),:=]|IL_[0-9A-Za-z]+/,
}
Prism.languages.clojure = {
  comment: { pattern: /;.*/, greedy: !0 },
  string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
  char: /\\\w+/,
  symbol: { pattern: /(^|[\s()\[\]{},])::?[\w*+!?'<>=/.-]+/, lookbehind: !0 },
  keyword: {
    pattern:
      /(\()(?:-|->|->>|\.|\.\.|\*|\/|\+|<|<=|=|==|>|>=|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|cond|conj|cons|constantly|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|declare|def|def-|definline|definterface|defmacro|defmethod|defmulti|defn|defn-|defonce|defproject|defprotocol|defrecord|defstruct|deftype|deref|difference|disj|dissoc|distinct|do|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|fn|fnseq|for|frest|gensym|get|get-proxy-class|hash-map|hash-set|identical\?|identity|if|if-let|if-not|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|let|line-seq|list|list\*|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|monitor-enter|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|quote|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|recur|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|set!|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|throw|time|to-array|to-array-2d|tree-seq|true\?|try|union|up|update-proxy|val|vals|var|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[\s)]|$)/,
    lookbehind: !0,
  },
  boolean: /\b(?:false|nil|true)\b/,
  number: {
    pattern:
      /(^|[^\w$@])(?:\d+(?:[/.]\d+)?(?:e[+-]?\d+)?|0x[a-f0-9]+|[1-9]\d?r[a-z0-9]+)[lmn]?(?![\w$@])/i,
    lookbehind: !0,
  },
  function: {
    pattern: /((?:^|[^'])\()[\w*+!?'<>=/.-]+(?=[\s)]|$)/,
    lookbehind: !0,
  },
  operator: /[#@^`~]/,
  punctuation: /[{}\[\](),]/,
}
Prism.languages.cmake = {
  comment: /#.*/,
  string: {
    pattern: /"(?:[^\\"]|\\.)*"/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
        inside: { punctuation: /\$\{|\}/, variable: /\w+/ },
      },
    },
  },
  variable:
    /\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_NAME|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE))\b/,
  property:
    /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
  keyword:
    /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
  boolean: /\b(?:FALSE|OFF|ON|TRUE)\b/,
  namespace:
    /\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,
  operator:
    /\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,
  inserted: { pattern: /\b\w+::\w+\b/, alias: 'class-name' },
  number: /\b\d+(?:\.\d+)*\b/,
  function: /\b[a-z_]\w*(?=\s*\()\b/i,
  punctuation: /[()>}]|\$[<{]/,
}
!(function (e) {
  var t = /#(?!\{).+/,
    n = { pattern: /#\{[^}]+\}/, alias: 'variable' }
  ;(e.languages.coffeescript = e.languages.extend('javascript', {
    comment: t,
    string: [
      { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ],
    keyword:
      /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
  })),
    e.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': {
        pattern: /###[\s\S]+?###/,
        alias: 'comment',
      },
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: { comment: t, interpolation: n },
      },
    }),
    e.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
          script: {
            pattern: /[\s\S]+/,
            alias: 'language-javascript',
            inside: e.languages.javascript,
          },
        },
      },
      'multiline-string': [
        { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: !0,
          alias: 'string',
          inside: { interpolation: n },
        },
      ],
    }),
    e.languages.insertBefore('coffeescript', 'keyword', {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    }),
    delete e.languages.coffeescript['template-string'],
    (e.languages.coffee = e.languages.coffeescript)
})(Prism)
!(function (e) {
  function n(e) {
    return RegExp('([ \t])(?:' + e + ')(?=[\\s;]|$)', 'i')
  }
  e.languages.csp = {
    directive: {
      pattern:
        /(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,
      lookbehind: !0,
      alias: 'property',
    },
    scheme: { pattern: n('[a-z][a-z0-9.+-]*:'), lookbehind: !0 },
    none: { pattern: n("'none'"), lookbehind: !0, alias: 'keyword' },
    nonce: {
      pattern: n("'nonce-[-+/\\w=]+'"),
      lookbehind: !0,
      alias: 'number',
    },
    hash: {
      pattern: n("'sha(?:256|384|512)-[-+/\\w=]+'"),
      lookbehind: !0,
      alias: 'number',
    },
    host: {
      pattern: n(
        "[a-z][a-z0-9.+-]*://[^\\s;,']*|\\*[^\\s;,']*|[a-z0-9-]+(?:\\.[a-z0-9-]+)+(?::[\\d*]+)?(?:/[^\\s;,']*)?"
      ),
      lookbehind: !0,
      alias: 'url',
      inside: { important: /\*/ },
    },
    keyword: [
      { pattern: n("'unsafe-[a-z-]+'"), lookbehind: !0, alias: 'unsafe' },
      { pattern: n("'[a-z-]+'"), lookbehind: !0, alias: 'safe' },
    ],
    punctuation: /;/,
  }
})(Prism)
!(function (e) {
  ;(e.languages.ruby = e.languages.extend('clike', {
    comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
    'class-name': {
      pattern:
        /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
    operator:
      /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
    punctuation: /[(){}[\].,;]/,
  })),
    e.languages.insertBefore('ruby', 'operator', {
      'double-colon': { pattern: /::/, alias: 'punctuation' },
    })
  var n = {
    pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
    lookbehind: !0,
    inside: {
      content: {
        pattern: /^(#\{)[\s\S]+(?=\}$)/,
        lookbehind: !0,
        inside: e.languages.ruby,
      },
      delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
    },
  }
  delete e.languages.ruby.function
  var t =
      '(?:' +
      [
        '([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1',
        '\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)',
        '\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}',
        '\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]',
        '<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>',
      ].join('|') +
      ')',
    i =
      '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)'
  e.languages.insertBefore('ruby', 'keyword', {
    'regex-literal': [
      {
        pattern: RegExp('%r' + t + '[egimnosux]{0,6}'),
        greedy: !0,
        inside: { interpolation: n, regex: /[\s\S]+/ },
      },
      {
        pattern:
          /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
        lookbehind: !0,
        greedy: !0,
        inside: { interpolation: n, regex: /[\s\S]+/ },
      },
    ],
    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    symbol: [
      { pattern: RegExp('(^|[^:]):' + i), lookbehind: !0, greedy: !0 },
      {
        pattern: RegExp('([\r\n{(,][ \t]*)' + i + '(?=:(?!:))'),
        lookbehind: !0,
        greedy: !0,
      },
    ],
    'method-definition': {
      pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
      lookbehind: !0,
      inside: {
        function: /\b\w+$/,
        keyword: /^self\b/,
        'class-name': /^\w+/,
        punctuation: /\./,
      },
    },
  }),
    e.languages.insertBefore('ruby', 'string', {
      'string-literal': [
        {
          pattern: RegExp('%[qQiIwWs]?' + t),
          greedy: !0,
          inside: { interpolation: n, string: /[\s\S]+/ },
        },
        {
          pattern:
            /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: !0,
          inside: { interpolation: n, string: /[\s\S]+/ },
        },
        {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?/,
              },
            },
            interpolation: n,
            string: /[\s\S]+/,
          },
        },
        {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?'|'$/,
              },
            },
            string: /[\s\S]+/,
          },
        },
      ],
      'command-literal': [
        {
          pattern: RegExp('%x' + t),
          greedy: !0,
          inside: {
            interpolation: n,
            command: { pattern: /[\s\S]+/, alias: 'string' },
          },
        },
        {
          pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
          greedy: !0,
          inside: {
            interpolation: n,
            command: { pattern: /[\s\S]+/, alias: 'string' },
          },
        },
      ],
    }),
    delete e.languages.ruby.string,
    e.languages.insertBefore('ruby', 'number', {
      builtin:
        /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/,
    }),
    (e.languages.rb = e.languages.ruby)
})(Prism)
!(function (e) {
  ;(e.languages.crystal = e.languages.extend('ruby', {
    keyword: [
      /\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,
      { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 },
    ],
    number:
      /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,
    operator: [/->/, e.languages.ruby.operator],
    punctuation: /[(){}[\].,;\\]/,
  })),
    e.languages.insertBefore('crystal', 'string-literal', {
      attribute: {
        pattern: /@\[.*?\]/,
        inside: {
          delimiter: { pattern: /^@\[|\]$/, alias: 'punctuation' },
          attribute: {
            pattern: /^(\s*)\w+/,
            lookbehind: !0,
            alias: 'class-name',
          },
          args: {
            pattern: /\S(?:[\s\S]*\S)?/,
            inside: e.languages.crystal,
          },
        },
      },
      expansion: {
        pattern: /\{(?:\{.*?\}|%.*?%)\}/,
        inside: {
          content: {
            pattern: /^(\{.)[\s\S]+(?=.\}$)/,
            lookbehind: !0,
            inside: e.languages.crystal,
          },
          delimiter: {
            pattern: /^\{[\{%]|[\}%]\}$/,
            alias: 'operator',
          },
        },
      },
      char: {
        pattern:
          /'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,
        greedy: !0,
      },
    })
})(Prism)
!(function (e) {
  var a,
    n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
  ;(e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: (a = {
      'pseudo-element':
        /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: 'keyword',
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: { punctuation: /\|$/ },
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0,
          },
          'attr-value': [
            n,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0,
            },
          ],
          operator: /[|~*^$]?=/,
        },
      },
      'n-th': [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: { number: /[\dn]+/, operator: /[+-]/ },
        },
        { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
      ],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/,
    }),
  }),
    (e.languages.css.atrule.inside['selector-function-argument'].inside = a),
    e.languages.insertBefore('css', 'property', {
      variable: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
        lookbehind: !0,
      },
    })
  var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
    i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 }
  e.languages.insertBefore('css', 'function', {
    operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
    hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
    color: [
      {
        pattern:
          /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: r,
          number: i,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/,
        },
      },
    ],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i,
  })
})(Prism)
;(Prism.languages.d = Prism.languages.extend('clike', {
  comment: [
    { pattern: /^\s*#!.+/, greedy: !0 },
    {
      pattern: RegExp(
        '(^|[^\\\\])(?:' +
          [
            '/\\+(?:/\\+(?:[^+]|\\+(?!/))*\\+/|(?!/\\+)[^])*?\\+/',
            '//.*',
            '/\\*[^]*?\\*/',
          ].join('|') +
          ')'
      ),
      lookbehind: !0,
      greedy: !0,
    },
  ],
  string: [
    {
      pattern: RegExp(
        [
          '\\b[rx]"(?:\\\\[^]|[^\\\\"])*"[cwd]?',
          '\\bq"(?:\\[[^]*?\\]|\\([^]*?\\)|<[^]*?>|\\{[^]*?\\})"',
          '\\bq"((?!\\d)\\w+)$[^]*?^\\1"',
          '\\bq"(.)[^]*?\\2"',
          '(["`])(?:\\\\[^]|(?!\\3)[^\\\\])*\\3[cwd]?',
        ].join('|'),
        'm'
      ),
      greedy: !0,
    },
    {
      pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
      greedy: !0,
      alias: 'token-string',
    },
  ],
  keyword:
    /\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,
  number: [
    /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,
    {
      pattern:
        /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
      lookbehind: !0,
    },
  ],
  operator:
    /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/,
})),
  Prism.languages.insertBefore('d', 'string', {
    char: /'(?:\\(?:\W|\w+)|[^\\])'/,
  }),
  Prism.languages.insertBefore('d', 'keyword', { property: /\B@\w*/ }),
  Prism.languages.insertBefore('d', 'function', {
    register: {
      pattern:
        /\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
      alias: 'variable',
    },
  })
!(function (e) {
  var a = [
      /\b(?:async|sync|yield)\*/,
      /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/,
    ],
    n = '(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*',
    s = {
      pattern: RegExp(n + '[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b'),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
      },
    }
  ;(e.languages.dart = e.languages.extend('clike', {
    'class-name': [
      s,
      {
        pattern: RegExp(n + '[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])'),
        lookbehind: !0,
        inside: s.inside,
      },
    ],
    keyword: a,
    operator:
      /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/,
  })),
    e.languages.insertBefore('dart', 'string', {
      'string-literal': {
        pattern:
          /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
            lookbehind: !0,
            inside: {
              punctuation: /^\$\{?|\}$/,
              expression: {
                pattern: /[\s\S]+/,
                inside: e.languages.dart,
              },
            },
          },
          string: /[\s\S]+/,
        },
      },
      string: void 0,
    }),
    e.languages.insertBefore('dart', 'class-name', {
      metadata: { pattern: /@\w+/, alias: 'function' },
    }),
    e.languages.insertBefore('dart', 'class-name', {
      generics: {
        pattern:
          /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': s,
          keyword: a,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
    })
})(Prism)
!(function (e) {
  e.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
  }
  var n = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    unchanged: ' ',
    diff: '!',
  }
  Object.keys(n).forEach(function (a) {
    var i = n[a],
      r = []
    ;/^\w+$/.test(a) || r.push(/\w+/.exec(a)[0]),
      'diff' === a && r.push('bold'),
      (e.languages.diff[a] = {
        pattern: RegExp('^(?:[' + i + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
        alias: r,
        inside: {
          line: {
            pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
            lookbehind: !0,
          },
          prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(a)[0] },
        },
      })
  }),
    Object.defineProperty(e.languages.diff, 'PREFIXES', { value: n })
})(Prism)
!(function (e) {
  function n(e, n) {
    return '___' + e.toUpperCase() + n + '___'
  }
  Object.defineProperties((e.languages['markup-templating'] = {}), {
    buildPlaceholders: {
      value: function (t, a, r, o) {
        if (t.language === a) {
          var c = (t.tokenStack = [])
          ;(t.code = t.code.replace(r, function (e) {
            if ('function' == typeof o && !o(e)) return e
            for (var r, i = c.length; -1 !== t.code.indexOf((r = n(a, i))); )
              ++i
            return (c[i] = e), r
          })),
            (t.grammar = e.languages.markup)
        }
      },
    },
    tokenizePlaceholders: {
      value: function (t, a) {
        if (t.language === a && t.tokenStack) {
          t.grammar = e.languages[a]
          var r = 0,
            o = Object.keys(t.tokenStack)
          !(function c(i) {
            for (var u = 0; u < i.length && !(r >= o.length); u++) {
              var g = i[u]
              if (
                'string' == typeof g ||
                (g.content && 'string' == typeof g.content)
              ) {
                var l = o[r],
                  s = t.tokenStack[l],
                  f = 'string' == typeof g ? g : g.content,
                  p = n(a, l),
                  k = f.indexOf(p)
                if (k > -1) {
                  ++r
                  var m = f.substring(0, k),
                    d = new e.Token(
                      a,
                      e.tokenize(s, t.grammar),
                      'language-' + a,
                      s
                    ),
                    h = f.substring(k + p.length),
                    v = []
                  m && v.push.apply(v, c([m])),
                    v.push(d),
                    h && v.push.apply(v, c([h])),
                    'string' == typeof g
                      ? i.splice.apply(i, [u, 1].concat(v))
                      : (g.content = v)
                }
              } else g.content && c(g.content)
            }
            return i
          })(t.tokens)
        }
      },
    },
  })
})(Prism)
!(function (e) {
  e.languages.django = {
    comment: /^\{#[\s\S]*?#\}$/,
    tag: { pattern: /(^\{%[+-]?\s*)\w+/, lookbehind: !0, alias: 'keyword' },
    delimiter: {
      pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
      alias: 'punctuation',
    },
    string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    filter: { pattern: /(\|)\w+/, lookbehind: !0, alias: 'function' },
    test: {
      pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
      lookbehind: !0,
      alias: 'function',
    },
    function: /\b[a-z_]\w+(?=\s*\()/i,
    keyword:
      /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    number: /\b\d+(?:\.\d+)?\b/,
    boolean: /[Ff]alse|[Nn]one|[Tt]rue/,
    variable: /\b\w+\b/,
    punctuation: /[{}[\](),.:;]/,
  }
  var n = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,
    o = e.languages['markup-templating']
  e.hooks.add('before-tokenize', function (e) {
    o.buildPlaceholders(e, 'django', n)
  }),
    e.hooks.add('after-tokenize', function (e) {
      o.tokenizePlaceholders(e, 'django')
    }),
    (e.languages.jinja2 = e.languages.django),
    e.hooks.add('before-tokenize', function (e) {
      o.buildPlaceholders(e, 'jinja2', n)
    }),
    e.hooks.add('after-tokenize', function (e) {
      o.tokenizePlaceholders(e, 'jinja2')
    })
})(Prism)
;(Prism.languages['dns-zone-file'] = {
  comment: /;.*/,
  string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
  variable: [
    { pattern: /(^\$ORIGIN[ \t]+)\S+/m, lookbehind: !0 },
    { pattern: /(^|\s)@(?=\s|$)/, lookbehind: !0 },
  ],
  keyword: /^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,
  class: {
    pattern: /(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,
    lookbehind: !0,
    alias: 'keyword',
  },
  type: {
    pattern:
      /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
    lookbehind: !0,
    alias: 'keyword',
  },
  punctuation: /[()]/,
}),
  (Prism.languages['dns-zone'] = Prism.languages['dns-zone-file'])
!(function (e) {
  var n = '(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)'.replace(
      /<SP_BS>/g,
      function () {
        return '\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])'
      }
    ),
    r =
      '"(?:[^"\\\\\r\n]|\\\\(?:\r\n|[^]))*"|\'(?:[^\'\\\\\r\n]|\\\\(?:\r\n|[^]))*\'',
    t = '--[\\w-]+=(?:<STR>|(?!["\'])(?:[^\\s\\\\]|\\\\.)+)'.replace(
      /<STR>/g,
      function () {
        return r
      }
    ),
    o = { pattern: RegExp(r), greedy: !0 },
    i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 }
  function a(e, r) {
    return (
      (e = e
        .replace(/<OPT>/g, function () {
          return t
        })
        .replace(/<SP>/g, function () {
          return n
        })),
      RegExp(e, r)
    )
  }
  ;(e.languages.docker = {
    instruction: {
      pattern:
        /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: !0,
      greedy: !0,
      inside: {
        options: {
          pattern: a('(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*', 'i'),
          lookbehind: !0,
          greedy: !0,
          inside: {
            property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
            string: [
              o,
              {
                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                lookbehind: !0,
              },
            ],
            operator: /\\$/m,
            punctuation: /=/,
          },
        },
        keyword: [
          {
            pattern: a(
              '(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b',
              'i'
            ),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: a(
              '(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS',
              'i'
            ),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: a('(^ONBUILD<SP>)\\w+', 'i'),
            lookbehind: !0,
            greedy: !0,
          },
          { pattern: /^\w+/, greedy: !0 },
        ],
        comment: i,
        string: o,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m,
      },
    },
    comment: i,
  }),
    (e.languages.dockerfile = e.languages.docker)
})(Prism)
Prism.languages.ebnf = {
  comment: /\(\*[\s\S]*?\*\)/,
  string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 },
  special: { pattern: /\?[^?\r\n]*\?/, greedy: !0, alias: 'class-name' },
  definition: {
    pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
    lookbehind: !0,
    alias: ['rule', 'keyword'],
  },
  rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
  punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
  operator: /[-=|*/!]/,
}
Prism.languages.eiffel = {
  comment: /--.*/,
  string: [
    { pattern: /"([^[]*)\[[\s\S]*?\]\1"/, greedy: !0 },
    { pattern: /"([^{]*)\{[\s\S]*?\}\1"/, greedy: !0 },
    { pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/, greedy: !0 },
  ],
  char: /'(?:%.|[^%'\r\n])+'/,
  keyword:
    /\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
  boolean: /\b(?:False|True)\b/i,
  'class-name': /\b[A-Z][\dA-Z_]*\b/,
  number: [
    /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
    /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i,
  ],
  punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
  operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/,
}
!(function (a) {
  ;(a.languages.ejs = {
    delimiter: { pattern: /^<%[-_=]?|[-_]?%>$/, alias: 'punctuation' },
    comment: /^#[\s\S]*/,
    'language-javascript': {
      pattern: /[\s\S]+/,
      inside: a.languages.javascript,
    },
  }),
    a.hooks.add('before-tokenize', function (e) {
      a.languages['markup-templating'].buildPlaceholders(
        e,
        'ejs',
        /<%(?!%)[\s\S]+?%>/g
      )
    }),
    a.hooks.add('after-tokenize', function (e) {
      a.languages['markup-templating'].tokenizePlaceholders(e, 'ejs')
    }),
    (a.languages.eta = a.languages.ejs)
})(Prism)
;(Prism.languages.elixir = {
  doc: {
    pattern:
      /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
    inside: { attribute: /^@\w+/, string: /['"][\s\S]+/ },
  },
  comment: { pattern: /#.*/, greedy: !0 },
  regex: {
    pattern:
      /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
    greedy: !0,
  },
  string: [
    {
      pattern:
        /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
      greedy: !0,
      inside: {},
    },
    { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
    {
      pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
      inside: {},
    },
  ],
  atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: 'symbol' },
  module: { pattern: /\b[A-Z]\w*\b/, alias: 'class-name' },
  'attr-name': /\b\w+\??:(?!:)/,
  argument: { pattern: /(^|[^&])&\d+/, lookbehind: !0, alias: 'variable' },
  attribute: { pattern: /@\w+/, alias: 'variable' },
  function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
  number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
  keyword:
    /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
  boolean: /\b(?:false|nil|true)\b/,
  operator: [
    /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
    { pattern: /([^<])<(?!<)/, lookbehind: !0 },
    { pattern: /([^>])>(?!>)/, lookbehind: !0 },
  ],
  punctuation: /<<|>>|[.,%\[\]{}()]/,
}),
  Prism.languages.elixir.string.forEach(function (e) {
    e.inside = {
      interpolation: {
        pattern: /#\{[^}]+\}/,
        inside: {
          delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
          rest: Prism.languages.elixir,
        },
      },
    }
  })
Prism.languages.elm = {
  comment: /--.*|\{-[\s\S]*?-\}/,
  char: {
    pattern:
      /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,
    greedy: !0,
  },
  string: [
    { pattern: /"""[\s\S]*?"""/, greedy: !0 },
    { pattern: /"(?:[^\\"\r\n]|\\.)*"/, greedy: !0 },
  ],
  'import-statement': {
    pattern:
      /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
    lookbehind: !0,
    inside: { keyword: /\b(?:as|exposing|import)\b/ },
  },
  keyword:
    /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
  builtin:
    /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
  number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
  operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
  hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
  constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
  punctuation: /[{}[\]|(),.:]/,
}
Prism.languages.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  string: {
    pattern:
      /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: !0,
  },
  number:
    /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword:
    /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [
    /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
    { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
  ],
  punctuation: /[\[\](){},;]|\.+|:+/,
}
!(function (a) {
  ;(a.languages.etlua = {
    delimiter: { pattern: /^<%[-=]?|-?%>$/, alias: 'punctuation' },
    'language-lua': { pattern: /[\s\S]+/, inside: a.languages.lua },
  }),
    a.hooks.add('before-tokenize', function (e) {
      a.languages['markup-templating'].buildPlaceholders(
        e,
        'etlua',
        /<%[\s\S]+?%>/g
      )
    }),
    a.hooks.add('after-tokenize', function (e) {
      a.languages['markup-templating'].tokenizePlaceholders(e, 'etlua')
    })
})(Prism)
!(function (e) {
  ;(e.languages.erb = {
    delimiter: {
      pattern: /^(\s*)<%=?|%>(?=\s*$)/,
      lookbehind: !0,
      alias: 'punctuation',
    },
    ruby: {
      pattern: /\s*\S[\s\S]*/,
      alias: 'language-ruby',
      inside: e.languages.ruby,
    },
  }),
    e.hooks.add('before-tokenize', function (n) {
      e.languages['markup-templating'].buildPlaceholders(
        n,
        'erb',
        /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g
      )
    }),
    e.hooks.add('after-tokenize', function (n) {
      e.languages['markup-templating'].tokenizePlaceholders(n, 'erb')
    })
})(Prism)
Prism.languages.erlang = {
  comment: /%.+/,
  string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
  'quoted-function': {
    pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
    alias: 'function',
  },
  'quoted-atom': { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: 'atom' },
  boolean: /\b(?:false|true)\b/,
  keyword: /\b(?:after|begin|case|catch|end|fun|if|of|receive|try|when)\b/,
  number: [
    /\$\\?./,
    /\b\d+#[a-z0-9]+/i,
    /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  ],
  function: /\b[a-z][\w@]*(?=\()/,
  variable: { pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, lookbehind: !0 },
  operator: [
    /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,
    { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
    { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 },
  ],
  atom: /\b[a-z][\w@]*/,
  punctuation: /[()[\]{}:;,.#|]|<<|>>/,
}
;(Prism.languages.fsharp = Prism.languages.extend('clike', {
  comment: [
    {
      pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,
      lookbehind: !0,
      greedy: !0,
    },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
    lookbehind: !0,
    inside: { operator: /->|\*/, punctuation: /\./ },
  },
  keyword:
    /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,
  number: [
    /\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,
    /\b0b[01]+(?:uy|y)?\b/,
    /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
    /\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/,
  ],
  operator:
    /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/,
})),
  Prism.languages.insertBefore('fsharp', 'keyword', {
    preprocessor: {
      pattern: /(^[\t ]*)#.*/m,
      lookbehind: !0,
      alias: 'property',
      inside: {
        directive: {
          pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
          lookbehind: !0,
          alias: 'keyword',
        },
      },
    },
  }),
  Prism.languages.insertBefore('fsharp', 'punctuation', {
    'computation-expression': {
      pattern: /\b[_a-z]\w*(?=\s*\{)/i,
      alias: 'keyword',
    },
  }),
  Prism.languages.insertBefore('fsharp', 'string', {
    annotation: {
      pattern: /\[<.+?>\]/,
      greedy: !0,
      inside: {
        punctuation: /^\[<|>\]$/,
        'class-name': {
          pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
          lookbehind: !0,
        },
        'annotation-content': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.fsharp,
        },
      },
    },
    char: {
      pattern:
        /'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
      greedy: !0,
    },
  })
;(Prism.languages['firestore-security-rules'] = Prism.languages.extend(
  'clike',
  {
    comment: /\/\/.*/,
    keyword:
      /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
    operator: /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/,
  }
)),
  delete Prism.languages['firestore-security-rules']['class-name'],
  Prism.languages.insertBefore('firestore-security-rules', 'keyword', {
    path: {
      pattern:
        /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        variable: {
          pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
          inside: {
            operator: /=/,
            keyword: /\*\*/,
            punctuation: /[.$(){}]/,
          },
        },
        punctuation: /\//,
      },
    },
    method: {
      pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
      lookbehind: !0,
      alias: 'builtin',
      inside: { punctuation: /,/ },
    },
  })
!(function (a) {
  ;(a.languages.flow = a.languages.extend('javascript', {})),
    a.languages.insertBefore('flow', 'keyword', {
      type: [
        {
          pattern:
            /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
          alias: 'class-name',
        },
      ],
    }),
    (a.languages.flow['function-variable'].pattern =
      /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i),
    delete a.languages.flow.parameter,
    a.languages.insertBefore('flow', 'operator', {
      'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
    }),
    Array.isArray(a.languages.flow.keyword) ||
      (a.languages.flow.keyword = [a.languages.flow.keyword]),
    a.languages.flow.keyword.unshift(
      {
        pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
        lookbehind: !0,
      },
      {
        pattern:
          /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
        lookbehind: !0,
      }
    )
})(Prism)
Prism.languages.fortran = {
  'quoted-number': { pattern: /[BOZ](['"])[A-F0-9]+\1/i, alias: 'number' },
  string: {
    pattern:
      /(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,
    inside: {
      comment: { pattern: /(&(?:\r\n?|\n)\s*)!.*/, lookbehind: !0 },
    },
  },
  comment: { pattern: /!.*/, greedy: !0 },
  boolean: /\.(?:FALSE|TRUE)\.(?:_\w+)?/i,
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
  keyword: [
    /\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i,
    /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,
    /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,
    /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i,
  ],
  operator: [
    /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i,
    { pattern: /(^|(?!\().)\/(?!\))/, lookbehind: !0 },
  ],
  punctuation: /\(\/|\/\)|[(),;:&]/,
}
!(function (e) {
  for (
    var t =
        '[^<()"\']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*--\x3e|"(?:[^\\\\"]|\\\\.)*"|\'(?:[^\\\\\']|\\\\.)*\'',
      n = 0;
    n < 2;
    n++
  )
    t = t.replace(/<expr>/g, function () {
      return t
    })
  t = t.replace(/<expr>/g, '[^\\s\\S]')
  var i = {
    comment: /<#--[\s\S]*?-->/,
    string: [
      { pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/, greedy: !0 },
      {
        pattern: RegExp(
          '("|\')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:(?!\\})(?:<expr>))*\\})*\\1'.replace(
            /<expr>/g,
            function () {
              return t
            }
          )
        ),
        greedy: !0,
        inside: {
          interpolation: {
            pattern: RegExp(
              '((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:(?!\\})(?:<expr>))*\\}'.replace(
                /<expr>/g,
                function () {
                  return t
                }
              )
            ),
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation',
              },
              rest: null,
            },
          },
        },
      },
    ],
    keyword: /\b(?:as)\b/,
    boolean: /\b(?:false|true)\b/,
    'builtin-function': {
      pattern: /((?:^|[^?])\?\s*)\w+/,
      lookbehind: !0,
      alias: 'function',
    },
    function: /\b\w+(?=\s*\()/,
    number: /\b\d+(?:\.\d+)?\b/,
    operator:
      /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
    punctuation: /[,;.:()[\]{}]/,
  }
  ;(i.string[1].inside.interpolation.inside.rest = i),
    (e.languages.ftl = {
      'ftl-comment': { pattern: /^<#--[\s\S]*/, alias: 'comment' },
      'ftl-directive': {
        pattern: /^<[\s\S]+>$/,
        inside: {
          directive: {
            pattern: /(^<\/?)[#@][a-z]\w*/i,
            lookbehind: !0,
            alias: 'keyword',
          },
          punctuation: /^<\/?|\/?>$/,
          content: {
            pattern: /\s*\S[\s\S]*/,
            alias: 'ftl',
            inside: i,
          },
        },
      },
      'ftl-interpolation': {
        pattern: /^\$\{[\s\S]*\}$/,
        inside: {
          punctuation: /^\$\{|\}$/,
          content: {
            pattern: /\s*\S[\s\S]*/,
            alias: 'ftl',
            inside: i,
          },
        },
      },
    }),
    e.hooks.add('before-tokenize', function (n) {
      var i = RegExp(
        '<#--[^]*?--\x3e|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}'.replace(
          /<expr>/g,
          function () {
            return t
          }
        ),
        'gi'
      )
      e.languages['markup-templating'].buildPlaceholders(n, 'ftl', i)
    }),
    e.hooks.add('after-tokenize', function (t) {
      e.languages['markup-templating'].tokenizePlaceholders(t, 'ftl')
    })
})(Prism)
Prism.languages.gamemakerlanguage = Prism.languages.gml =
  Prism.languages.extend('clike', {
    keyword:
      /\b(?:break|case|continue|default|do|else|enum|exit|for|globalvar|if|repeat|return|switch|until|var|while)\b/,
    number:
      /(?:\b0x[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ulf]{0,4}/i,
    operator:
      /--|\+\+|[-+%/=]=?|!=|\*\*?=?|<[<=>]?|>[=>]?|&&?|\^\^?|\|\|?|~|\b(?:and|at|not|or|with|xor)\b/,
    constant:
      /\b(?:GM_build_date|GM_version|action_(?:continue|restart|reverse|stop)|all|gamespeed_(?:fps|microseconds)|global|local|noone|other|pi|pointer_(?:invalid|null)|self|timezone_(?:local|utc)|undefined|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|post|pre)|keypress|keyrelease|trigger|(?:left|middle|no|right)_button|(?:left|middle|right)_press|(?:left|middle|right)_release|mouse_(?:enter|leave|wheel_down|wheel_up)|global_(?:left|middle|right)_button|global_(?:left|middle|right)_press|global_(?:left|middle|right)_release|joystick(?:1|2)_(?:button1|button2|button3|button4|button5|button6|button7|button8|down|left|right|up)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|gui|gui_begin|gui_end|step_(?:begin|end|normal))|vk_(?:alt|anykey|backspace|control|delete|down|end|enter|escape|home|insert|left|nokey|pagedown|pageup|pause|printscreen|return|right|shift|space|tab|up|f\d|numpad\d|add|decimal|divide|lalt|lcontrol|lshift|multiply|ralt|rcontrol|rshift|subtract)|achievement_(?:filter_(?:all_players|favorites_only|friends_only)|friends_info|info|leaderboard_info|our_info|pic_loaded|show_(?:achievement|bank|friend_picker|leaderboard|profile|purchase_prompt|ui)|type_challenge|type_score_challenge)|asset_(?:font|object|path|room|script|shader|sound|sprite|tiles|timeline|unknown)|audio_(?:3d|falloff_(?:exponent_distance|exponent_distance_clamped|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|none)|mono|new_system|old_system|stereo)|bm_(?:add|complex|dest_alpha|dest_color|dest_colour|inv_dest_alpha|inv_dest_color|inv_dest_colour|inv_src_alpha|inv_src_color|inv_src_colour|max|normal|one|src_alpha|src_alpha_sat|src_color|src_colour|subtract|zero)|browser_(?:chrome|firefox|ie|ie_mobile|not_a_browser|opera|safari|safari_mobile|tizen|unknown|windows_store)|buffer_(?:bool|f16|f32|f64|fast|fixed|generalerror|grow|invalidtype|network|outofbounds|outofspace|s16|s32|s8|seek_end|seek_relative|seek_start|string|text|u16|u32|u64|u8|vbuffer|wrap)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|cmpfunc_(?:always|equal|greater|greaterequal|less|lessequal|never|notequal)|cr_(?:appstart|arrow|beam|cross|default|drag|handpoint|hourglass|none|size_all|size_nesw|size_ns|size_nwse|size_we|uparrow)|cull_(?:clockwise|counterclockwise|noculling)|device_(?:emulator|tablet)|device_ios_(?:ipad|ipad_retina|iphone|iphone5|iphone6|iphone6plus|iphone_retina|unknown)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|dll_(?:cdecl|cdel|stdcall)|ds_type_(?:grid|list|map|priority|queue|stack)|ef_(?:cloud|ellipse|explosion|firework|flare|rain|ring|smoke|smokeup|snow|spark|star)|fa_(?:archive|bottom|center|directory|hidden|left|middle|readonly|right|sysfile|top|volumeid)|fb_login_(?:default|fallback_to_webview|forcing_safari|forcing_webview|no_fallback_to_webview|use_system_account)|iap_(?:available|canceled|ev_consume|ev_product|ev_purchase|ev_restore|ev_storeload|failed|purchased|refunded|status_available|status_loading|status_processing|status_restoring|status_unavailable|status_uninitialised|storeload_failed|storeload_ok|unavailable)|leaderboard_type_(?:number|time_mins_secs)|lighttype_(?:dir|point)|matrix_(?:projection|view|world)|mb_(?:any|left|middle|none|right)|network_(?:config_(?:connect_timeout|disable_reliable_udp|enable_reliable_udp|use_non_blocking_socket)|socket_(?:bluetooth|tcp|udp)|type_(?:connect|data|disconnect|non_blocking_connect))|of_challenge_(?:lose|tie|win)|os_(?:android|ios|linux|macosx|ps3|ps4|psvita|unknown|uwp|win32|win8native|windows|winphone|xboxone)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|angle|angle_limits|damping_ratio|frequency|length_1|length_2|lower_angle_limit|max_force|max_length|max_motor_force|max_motor_torque|max_torque|motor_force|motor_speed|motor_torque|reaction_force_x|reaction_force_y|reaction_torque|speed|translation|upper_angle_limit)|phy_particle_data_flag_(?:category|color|colour|position|typeflags|velocity)|phy_particle_flag_(?:colormixing|colourmixing|elastic|powder|spring|tensile|viscous|wall|water|zombie)|phy_particle_group_flag_(?:rigid|solid)|pr_(?:linelist|linestrip|pointlist|trianglefan|trianglelist|trianglestrip)|ps_(?:distr|shape)_(?:diamond|ellipse|gaussian|invgaussian|line|linear|rectangle)|pt_shape_(?:circle|cloud|disk|explosion|flare|line|pixel|ring|smoke|snow|spark|sphere|square|star)|ty_(?:real|string)|gp_(?:face\d|axislh|axislv|axisrh|axisrv|padd|padl|padr|padu|select|shoulderl|shoulderlb|shoulderr|shoulderrb|start|stickl|stickr)|lb_disp_(?:none|numeric|time_ms|time_sec)|lb_sort_(?:ascending|descending|none)|ov_(?:achievements|community|friends|gamegroup|players|settings)|ugc_(?:filetype_(?:community|microtrans)|list_(?:Favorited|Followed|Published|Subscribed|UsedOrPlayed|VotedDown|VotedOn|VotedUp|WillVoteLater)|match_(?:AllGuides|Artwork|Collections|ControllerBindings|IntegratedGuides|Items|Items_Mtx|Items_ReadyToUse|Screenshots|UsableInGame|Videos|WebGuides)|query_(?:AcceptedForGameRankedByAcceptanceDate|CreatedByFriendsRankedByPublicationDate|FavoritedByFriendsRankedByPublicationDate|NotYetRated)|query_RankedBy(?:NumTimesReported|PublicationDate|TextSearch|TotalVotesAsc|Trend|Vote|VotesUp)|result_success|sortorder_CreationOrder(?:Asc|Desc)|sortorder_(?:ForModeration|LastUpdatedDesc|SubscriptionDateDesc|TitleAsc|VoteScoreDesc)|visibility_(?:friends_only|private|public))|vertex_usage_(?:binormal|blendindices|blendweight|color|colour|depth|fog|normal|position|psize|sample|tangent|texcoord|textcoord)|vertex_type_(?:float\d|color|colour|ubyte4)|input_type|layerelementtype_(?:background|instance|oldtilemap|particlesystem|sprite|tile|tilemap|undefined)|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|tile_(?:flip|index_mask|mirror|rotate)|(?:obj|rm|scr|spr)\w+)\b/,
    variable:
      /\b(?:alarm|application_surface|async_load|background_(?:alpha|blend|color|colour|foreground|height|hspeed|htiled|index|showcolor|showcolour|visible|vspeed|vtiled|width|x|xscale|y|yscale)|bbox_(?:bottom|left|right|top)|browser_(?:height|width)|caption_(?:health|lives|score)|current_(?:day|hour|minute|month|second|time|weekday|year)|cursor_sprite|debug_mode|delta_time|direction|display_aa|error_(?:last|occurred)|event_(?:action|number|object|type)|fps|fps_real|friction|game_(?:display|project|save)_(?:id|name)|gamemaker_(?:pro|registered|version)|gravity|gravity_direction|(?:h|v)speed|health|iap_data|id|image_(?:alpha|angle|blend|depth|index|number|speed|xscale|yscale)|instance_(?:count|id)|keyboard_(?:key|lastchar|lastkey|string)|layer|lives|mask_index|mouse_(?:button|lastbutton|x|y)|object_index|os_(?:browser|device|type|version)|path_(?:endaction|index|orientation|position|positionprevious|scale|speed)|persistent|phy_(?:rotation|(?:col_normal|collision|com|linear_velocity|position|speed)_(?:x|y)|angular_(?:damping|velocity)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|pointer_(?:invalid|null)|room|room_(?:caption|first|height|last|persistent|speed|width)|score|secure_mode|show_(?:health|lives|score)|solid|speed|sprite_(?:height|index|width|xoffset|yoffset)|temp_directory|timeline_(?:index|loop|position|running|speed)|transition_(?:color|kind|steps)|undefined|view_(?:angle|current|enabled|(?:h|v)(?:border|speed)|(?:h|w|x|y)port|(?:h|w|x|y)view|object|surface_id|visible)|visible|webgl_enabled|working_directory|(?:x|y)(?:previous|start)|x|y|argument(?:_relitive|_count|\d)|argument|global|local|other|self)\b/,
  })
Prism.languages.gcode = {
  comment: /;.*|\B\(.*?\)\B/,
  string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
  keyword: /\b[GM]\d+(?:\.\d+)?\b/,
  property: /\b[A-Z]/,
  checksum: { pattern: /(\*)\d+/, lookbehind: !0, alias: 'number' },
  punctuation: /[:*]/,
}
Prism.languages.gdscript = {
  comment: /#.*/,
  string: {
    pattern:
      /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,
    lookbehind: !0,
  },
  keyword:
    /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,
  function: /\b[a-z_]\w*(?=[ \t]*\()/i,
  variable: /\$\w+/,
  number: [
    /\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,
    /\b(?:INF|NAN|PI|TAU)\b/,
  ],
  constant: /\b[A-Z][A-Z_\d]*\b/,
  boolean: /\b(?:false|true)\b/,
  operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
  punctuation: /[.:,;()[\]{}]/,
}
Prism.languages.gedcom = {
  'line-value': {
    pattern:
      /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
    lookbehind: !0,
    inside: {
      pointer: {
        pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
        alias: 'variable',
      },
    },
  },
  record: {
    pattern:
      /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
    lookbehind: !0,
    alias: 'tag',
  },
  level: { pattern: /(^[\t ]*)\d+/m, lookbehind: !0, alias: 'number' },
  pointer: {
    pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
    alias: 'variable',
  },
}
!(function (a) {
  var n = '(?:\r?\n|\r)[ \t]*\\|.+\\|(?:(?!\\|).)*'
  a.languages.gherkin = {
    pystring: { pattern: /("""|''')[\s\S]+?\1/, alias: 'string' },
    comment: { pattern: /(^[ \t]*)#.*/m, lookbehind: !0 },
    tag: { pattern: /(^[ \t]*)@\S*/m, lookbehind: !0 },
    feature: {
      pattern:
        /((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|Lastnost|Mak|Mogucnost|laH|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|Potrzeba biznesowa|perbogh|poQbogh malja'|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):(?:[^:\r\n]+(?:\r?\n|\r|$))*/,
      lookbehind: !0,
      inside: {
        important: { pattern: /(:)[^\r\n]+/, lookbehind: !0 },
        keyword: /[^:\r\n]+:/,
      },
    },
    scenario: {
      pattern:
        /(^[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram Senaryo|Dyagram senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|EXAMPLZ|Examples|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|Grundlage|Hannergrond|ghantoH|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut chovnatlh|lut|lutmey|Lýsing Atburðarásar|Lýsing Dæma|MISHUN SRSLY|MISHUN|Menggariskan Senario|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan Senaryo|Plan senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo Deskripsyon|Senaryo deskripsyon|Senaryo|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie Uiteensetting|Situasie|Skenario konsep|Skenario|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa hwaer swa|Swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo-ho-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/m,
      lookbehind: !0,
      inside: {
        important: { pattern: /(:)[^\r\n]*/, lookbehind: !0 },
        keyword: /[^:\r\n]+:/,
      },
    },
    'table-body': {
      pattern: RegExp('(' + n + ')(?:' + n + ')+'),
      lookbehind: !0,
      inside: {
        outline: { pattern: /<[^>]+>/, alias: 'variable' },
        td: { pattern: /\s*[^\s|][^|]*/, alias: 'string' },
        punctuation: /\|/,
      },
    },
    'table-head': {
      pattern: RegExp(n),
      inside: {
        th: { pattern: /\s*[^\s|][^|]*/, alias: 'variable' },
        punctuation: /\|/,
      },
    },
    atrule: {
      pattern:
        /(^[ \t]+)(?:'a|'ach|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cand|Cando|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|DEN|Dato|De|Den youse gotta|Dengan|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|E|En|Entonces|Epi|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kad|Kada|Kadar|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Ma|Majd|Maka|Manawa|Mas|Men|Menawa|Mutta|Nalika|Nalikaning|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Och|Og|Oletetaan|Ond|Onda|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|Quan|Quand|Quando|qaSDI'|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|Un|Und|ugeholl|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadan|Zadani|Zadano|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t])/m,
      lookbehind: !0,
    },
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
      inside: { outline: { pattern: /<[^>]+>/, alias: 'variable' } },
    },
    outline: { pattern: /<[^>]+>/, alias: 'variable' },
  }
})(Prism)
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
  coord: /^@@.*@@$/m,
  'commit-sha1': /^commit \w{40}$/m,
}
Prism.languages.glsl = Prism.languages.extend('c', {
  keyword:
    /\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/,
})
;(Prism.languages.go = Prism.languages.extend('clike', {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
  ],
  operator:
    /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
})),
  Prism.languages.insertBefore('go', 'string', {
    char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
  }),
  delete Prism.languages.go['class-name']
;(Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern:
      /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: 'function',
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: 'function',
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: 'function',
  },
  keyword:
    /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/,
}),
  Prism.hooks.add('after-tokenize', function (n) {
    if ('graphql' === n.language)
      for (
        var t = n.tokens.filter(function (n) {
            return (
              'string' != typeof n &&
              'comment' !== n.type &&
              'scalar' !== n.type
            )
          }),
          e = 0;
        e < t.length;

      ) {
        var a = t[e++]
        if ('keyword' === a.type && 'mutation' === a.content) {
          var r = []
          if (
            c(['definition-mutation', 'punctuation']) &&
            '(' === l(1).content
          ) {
            e += 2
            var i = f(/^\($/, /^\)$/)
            if (-1 === i) continue
            for (; e < i; e++) {
              var o = l(0)
              'variable' === o.type &&
                (b(o, 'variable-input'), r.push(o.content))
            }
            e = i + 1
          }
          if (
            c(['punctuation', 'property-query']) &&
            '{' === l(0).content &&
            (e++, b(l(0), 'property-mutation'), r.length > 0)
          ) {
            var s = f(/^\{$/, /^\}$/)
            if (-1 === s) continue
            for (var u = e; u < s; u++) {
              var p = t[u]
              'variable' === p.type &&
                r.indexOf(p.content) >= 0 &&
                b(p, 'variable-input')
            }
          }
        }
      }
    function l(n) {
      return t[e + n]
    }
    function c(n, t) {
      t = t || 0
      for (var e = 0; e < n.length; e++) {
        var a = l(e + t)
        if (!a || a.type !== n[e]) return !1
      }
      return !0
    }
    function f(n, a) {
      for (var r = 1, i = e; i < t.length; i++) {
        var o = t[i],
          s = o.content
        if ('punctuation' === o.type && 'string' == typeof s)
          if (n.test(s)) r++
          else if (a.test(s) && 0 == --r) return i
      }
      return -1
    }
    function b(n, t) {
      var e = n.alias
      e ? Array.isArray(e) || (n.alias = e = [e]) : (n.alias = e = []),
        e.push(t)
    }
  })
!(function (e) {
  var n = {
    pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
    lookbehind: !0,
    inside: {
      'interpolation-punctuation': {
        pattern: /^\$\{?|\}$/,
        alias: 'punctuation',
      },
      expression: { pattern: /[\s\S]+/, inside: null },
    },
  }
  ;(e.languages.groovy = e.languages.extend('clike', {
    string: {
      pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
      greedy: !0,
    },
    keyword:
      /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    number:
      /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
    operator: {
      pattern:
        /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: !0,
    },
    punctuation: /\.+|[{}[\];(),:$]/,
  })),
    e.languages.insertBefore('groovy', 'string', {
      shebang: { pattern: /#!.+/, alias: 'comment', greedy: !0 },
      'interpolation-string': {
        pattern:
          /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
        greedy: !0,
        inside: { interpolation: n, string: /[\s\S]+/ },
      },
    }),
    e.languages.insertBefore('groovy', 'punctuation', {
      'spock-block': /\b(?:and|cleanup|expect|given|setup|then|when|where):/,
    }),
    e.languages.insertBefore('groovy', 'function', {
      annotation: {
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0,
        alias: 'punctuation',
      },
    }),
    (n.inside.expression.inside = e.languages.groovy)
})(Prism)
!(function (n) {
  n.languages.haml = {
    'multiline-comment': {
      pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
      lookbehind: !0,
      alias: 'comment',
    },
    'multiline-code': [
      {
        pattern:
          /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
        lookbehind: !0,
        inside: n.languages.ruby,
      },
      {
        pattern:
          /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
        lookbehind: !0,
        inside: n.languages.ruby,
      },
    ],
    filter: {
      pattern:
        /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
      lookbehind: !0,
      inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'symbol' } },
    },
    markup: {
      pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
      lookbehind: !0,
      inside: n.languages.markup,
    },
    doctype: {
      pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
      lookbehind: !0,
    },
    tag: {
      pattern:
        /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,
      lookbehind: !0,
      inside: {
        attributes: [
          {
            pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
            lookbehind: !0,
            inside: n.languages.ruby,
          },
          {
            pattern: /\([^)]+\)/,
            inside: {
              'attr-value': {
                pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                lookbehind: !0,
              },
              'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[=(),]/,
            },
          },
          { pattern: /\[[^\]]+\]/, inside: n.languages.ruby },
        ],
        punctuation: /[<>]/,
      },
    },
    code: {
      pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
      lookbehind: !0,
      inside: n.languages.ruby,
    },
    interpolation: {
      pattern: /#\{[^}]+\}/,
      inside: {
        delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
        ruby: { pattern: /[\s\S]+/, inside: n.languages.ruby },
      },
    },
    punctuation: {
      pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
      lookbehind: !0,
    },
  }
  for (
    var e = [
        'css',
        { filter: 'coffee', language: 'coffeescript' },
        'erb',
        'javascript',
        'less',
        'markdown',
        'ruby',
        'scss',
        'textile',
      ],
      t = {},
      r = 0,
      a = e.length;
    r < a;
    r++
  ) {
    var i = e[r]
    ;(i = 'string' == typeof i ? { filter: i, language: i } : i),
      n.languages[i.language] &&
        (t['filter-' + i.filter] = {
          pattern: RegExp(
            '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+'.replace(
              '{{filter_name}}',
              function () {
                return i.filter
              }
            )
          ),
          lookbehind: !0,
          inside: {
            'filter-name': { pattern: /^:[\w-]+/, alias: 'symbol' },
            text: {
              pattern: /[\s\S]+/,
              alias: [i.language, 'language-' + i.language],
              inside: n.languages[i.language],
            },
          },
        })
  }
  n.languages.insertBefore('haml', 'filter', t)
})(Prism)
!(function (a) {
  ;(a.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: 'punctuation' },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:false|true)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: !0,
      alias: 'keyword',
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
  }),
    a.hooks.add('before-tokenize', function (e) {
      a.languages['markup-templating'].buildPlaceholders(
        e,
        'handlebars',
        /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
      )
    }),
    a.hooks.add('after-tokenize', function (e) {
      a.languages['markup-templating'].tokenizePlaceholders(e, 'handlebars')
    }),
    (a.languages.hbs = a.languages.handlebars),
    (a.languages.mustache = a.languages.handlebars)
})(Prism)
;(Prism.languages.haskell = {
  comment: {
    pattern:
      /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,
    lookbehind: !0,
  },
  char: {
    pattern:
      /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
    alias: 'string',
  },
  string: { pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/, greedy: !0 },
  keyword:
    /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
  'import-statement': {
    pattern:
      /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
    lookbehind: !0,
    inside: {
      keyword: /\b(?:as|hiding|import|qualified)\b/,
      punctuation: /\./,
    },
  },
  builtin:
    /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
  number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
  operator: [
    { pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/, greedy: !0 },
    { pattern: /(\s)\.(?=\s)/, lookbehind: !0 },
    /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/,
  ],
  hvariable: {
    pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,
    inside: { punctuation: /\./ },
  },
  constant: {
    pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,
    inside: { punctuation: /\./ },
  },
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.hs = Prism.languages.haskell)
;(Prism.languages.haxe = Prism.languages.extend('clike', {
  string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 },
  'class-name': [
    {
      pattern:
        /(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,
      lookbehind: !0,
    },
    /\b[A-Z]\w*/,
  ],
  keyword:
    /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,
  function: { pattern: /\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i, greedy: !0 },
  operator: /\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/,
})),
  Prism.languages.insertBefore('haxe', 'string', {
    'string-interpolation': {
      pattern: /'(?:[^'\\]|\\[\s\S])*'/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(^|[^\\])\$(?:\w+|\{[^{}]+\})/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{?|\}$/,
              alias: 'punctuation',
            },
            expression: {
              pattern: /[\s\S]+/,
              inside: Prism.languages.haxe,
            },
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.insertBefore('haxe', 'class-name', {
    regex: {
      pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,
      greedy: !0,
      inside: {
        'regex-flags': /\b[a-z]+$/,
        'regex-source': {
          pattern: /^(~\/)[\s\S]+(?=\/$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex,
        },
        'regex-delimiter': /^~\/|\/$/,
      },
    },
  }),
  Prism.languages.insertBefore('haxe', 'keyword', {
    preprocessor: {
      pattern: /#(?:else|elseif|end|if)\b.*/,
      alias: 'property',
    },
    metadata: { pattern: /@:?[\w.]+/, alias: 'symbol' },
    reification: { pattern: /\$(?:\w+|(?=\{))/, alias: 'important' },
  })
Prism.languages.hcl = {
  comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
  heredoc: {
    pattern: /<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,
    greedy: !0,
    alias: 'string',
  },
  keyword: [
    {
      pattern:
        /(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,
      inside: {
        type: {
          pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
          lookbehind: !0,
          alias: 'variable',
        },
      },
    },
    {
      pattern:
        /(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,
      inside: {
        type: {
          pattern:
            /(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
          lookbehind: !0,
          alias: 'variable',
        },
      },
    },
    /[\w-]+(?=\s+\{)/,
  ],
  property: [/[-\w\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],
  string: {
    pattern:
      /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
        lookbehind: !0,
        inside: {
          type: {
            pattern:
              /(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,
            lookbehind: !0,
            alias: 'variable',
          },
          keyword: /\b(?:count|data|local|module|path|self|terraform|var)\b/i,
          function: /\w+(?=\()/,
          string: { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0 },
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
          punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/,
        },
      },
    },
  },
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
  boolean: /\b(?:false|true)\b/i,
  punctuation: /[=\[\]{}]/,
}
!(function (t) {
  function a(t) {
    return RegExp('(^(?:' + t + '):[ \t]*(?![ \t]))[^]+', 'i')
  }
  t.languages.http = {
    'request-line': {
      pattern:
        /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
      inside: {
        method: { pattern: /^[A-Z]+\b/, alias: 'property' },
        'request-target': {
          pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
          lookbehind: !0,
          alias: 'url',
          inside: t.languages.uri,
        },
        'http-version': {
          pattern: /^(\s)HTTP\/[\d.]+/,
          lookbehind: !0,
          alias: 'property',
        },
      },
    },
    'response-status': {
      pattern: /^HTTP\/[\d.]+ \d+ .+/m,
      inside: {
        'http-version': { pattern: /^HTTP\/[\d.]+/, alias: 'property' },
        'status-code': {
          pattern: /^(\s)\d+(?=\s)/,
          lookbehind: !0,
          alias: 'number',
        },
        'reason-phrase': {
          pattern: /^(\s).+/,
          lookbehind: !0,
          alias: 'string',
        },
      },
    },
    header: {
      pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
      inside: {
        'header-value': [
          {
            pattern: a('Content-Security-Policy'),
            lookbehind: !0,
            alias: ['csp', 'languages-csp'],
            inside: t.languages.csp,
          },
          {
            pattern: a('Public-Key-Pins(?:-Report-Only)?'),
            lookbehind: !0,
            alias: ['hpkp', 'languages-hpkp'],
            inside: t.languages.hpkp,
          },
          {
            pattern: a('Strict-Transport-Security'),
            lookbehind: !0,
            alias: ['hsts', 'languages-hsts'],
            inside: t.languages.hsts,
          },
          { pattern: a('[^:]+'), lookbehind: !0 },
        ],
        'header-name': { pattern: /^[^:]+/, alias: 'keyword' },
        punctuation: /^:/,
      },
    },
  }
  var e,
    n = t.languages,
    s = {
      'application/javascript': n.javascript,
      'application/json': n.json || n.javascript,
      'application/xml': n.xml,
      'text/xml': n.xml,
      'text/html': n.html,
      'text/css': n.css,
      'text/plain': n.plain,
    },
    i = { 'application/json': !0, 'application/xml': !0 }
  function r(t) {
    var a = t.replace(/^[a-z]+\//, '')
    return '(?:' + t + '|\\w+/(?:[\\w.-]+\\+)+' + a + '(?![+\\w.-]))'
  }
  for (var p in s)
    if (s[p]) {
      e = e || {}
      var l = i[p] ? r(p) : p
      e[p.replace(/\//g, '-')] = {
        pattern: RegExp(
          '(content-type:\\s*' +
            l +
            '(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*',
          'i'
        ),
        lookbehind: !0,
        inside: s[p],
      }
    }
  e && t.languages.insertBefore('http', 'header', e)
})(Prism)
Prism.languages.hpkp = {
  directive: {
    pattern:
      /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
    alias: 'property',
  },
  operator: /=/,
  punctuation: /;/,
}
Prism.languages.hsts = {
  directive: {
    pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
    alias: 'property',
  },
  operator: /=/,
  punctuation: /;/,
}
Prism.languages.ichigojam = {
  comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
  string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/, greedy: !0 },
  number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
  keyword:
    /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
  function:
    /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
  label: /(?:\B@\S+)/,
  operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
  punctuation: /[\[,;:()\]]/,
}
Prism.languages.icon = {
  comment: /#.*/,
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
    greedy: !0,
  },
  number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
  'builtin-keyword': {
    pattern:
      /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
    alias: 'variable',
  },
  directive: { pattern: /\$\w+/, alias: 'builtin' },
  keyword:
    /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
  function: /\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
  operator:
    /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
  punctuation: /[\[\](){},;]/,
}
;(Prism.languages.inform7 = {
  string: {
    pattern: /"[^"]*"/,
    inside: {
      substitution: {
        pattern: /\[[^\[\]]+\]/,
        inside: {
          delimiter: { pattern: /\[|\]/, alias: 'punctuation' },
        },
      },
    },
  },
  comment: { pattern: /\[[^\[\]]+\]/, greedy: !0 },
  title: {
    pattern: /^[ \t]*(?:book|chapter|part(?! of)|section|table|volume)\b.+/im,
    alias: 'important',
  },
  number: {
    pattern:
      /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?(?:(?!\d)\w+)?|\b(?:eight|eleven|five|four|nine|one|seven|six|ten|three|twelve|two))\b(?!-)/i,
    lookbehind: !0,
  },
  verb: {
    pattern:
      /(^|[^-])\b(?:answering|applying to|are|asking|attacking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:ing|s)?|consulting|contain(?:ing|s)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:s|ve|ving)|hold(?:ing|s)?|impl(?:ies|y)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:ing|s)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:ing|s)?|setting|showing|singing|sleeping|smelling|squeezing|support(?:ing|s)?|swearing|switching|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:ing|s)?|var(?:ies|y|ying)|waiting|waking|waving|wear(?:ing|s)?)\b(?!-)/i,
    lookbehind: !0,
    alias: 'operator',
  },
  keyword: {
    pattern:
      /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|the story|unless)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
    lookbehind: !0,
  },
  property: {
    pattern:
      /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: off| on)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
    lookbehind: !0,
    alias: 'symbol',
  },
  position: {
    pattern:
      /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
    lookbehind: !0,
    alias: 'keyword',
  },
  type: {
    pattern:
      /(^|[^-])\b(?:actions?|activit(?:ies|y)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
    lookbehind: !0,
    alias: 'variable',
  },
  punctuation: /[.,:;(){}]/,
}),
  (Prism.languages.inform7.string.inside.substitution.inside.rest =
    Prism.languages.inform7),
  (Prism.languages.inform7.string.inside.substitution.inside.rest.text = {
    pattern: /\S(?:\s*\S)*/,
    alias: 'comment',
  })
Prism.languages.ini = {
  comment: { pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m, lookbehind: !0 },
  section: {
    pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
    lookbehind: !0,
    inside: {
      'section-name': {
        pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
        lookbehind: !0,
        alias: 'selector',
      },
      punctuation: /\[|\]/,
    },
  },
  key: {
    pattern:
      /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
    lookbehind: !0,
    alias: 'attr-name',
  },
  value: {
    pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
    lookbehind: !0,
    alias: 'attr-value',
    inside: {
      'inner-value': { pattern: /^("|').+(?=\1$)/, lookbehind: !0 },
    },
  },
  punctuation: /=/,
}
Prism.languages.io = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*|#.*)/,
    lookbehind: !0,
    greedy: !0,
  },
  'triple-quoted-string': {
    pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
    greedy: !0,
    alias: 'string',
  },
  string: { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
  keyword:
    /\b(?:activate|activeCoroCount|asString|block|break|call|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getEnvironmentVariable|getSlot|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
  builtin:
    /\b(?:Array|AudioDevice|AudioMixer|BigNum|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Random|Regex|SGML|SGMLElement|SGMLParser|SQLite|Sequence|Server|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink)\b/,
  boolean: /\b(?:false|nil|true)\b/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?/i,
  operator:
    /[=!*/%+\-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|\b(?:and|not|or|return)\b|@@?|\?\??|\.\./,
  punctuation: /[{}[\];(),.:]/,
}
Prism.languages.j = {
  comment: { pattern: /\bNB\..*/, greedy: !0 },
  string: { pattern: /'(?:''|[^'\r\n])*'/, greedy: !0 },
  keyword:
    /\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
  verb: {
    pattern:
      /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
    alias: 'keyword',
  },
  number:
    /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
  adverb: { pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, alias: 'builtin' },
  operator: /[=a][.:]|_\./,
  conjunction: {
    pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
    alias: 'variable',
  },
  punctuation: /[()]/,
}
!(function (e) {
  var n =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    t = '(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*',
    s = {
      pattern: RegExp('(^|[^\\w.])' + t + '[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b'),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
        punctuation: /\./,
      },
    }
  ;(e.languages.java = e.languages.extend('clike', {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0,
    },
    'class-name': [
      s,
      {
        pattern: RegExp(
          '(^|[^\\w.])' +
            t +
            '[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)'
        ),
        lookbehind: !0,
        inside: s.inside,
      },
      {
        pattern: RegExp(
          '(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)' +
            t +
            '[A-Z]\\w*\\b'
        ),
        lookbehind: !0,
        inside: s.inside,
      },
    ],
    keyword: n,
    function: [
      e.languages.clike.function,
      { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
    ],
    number:
      /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern:
        /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: 'string',
      },
      char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
    }),
    e.languages.insertBefore('java', 'class-name', {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: 'punctuation',
      },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          'class-name': s,
          keyword: n,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
      import: [
        {
          pattern: RegExp('(\\bimport\\s+)' + t + '(?:[A-Z]\\w*|\\*)(?=\\s*;)'),
          lookbehind: !0,
          inside: {
            namespace: s.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/,
          },
        },
        {
          pattern: RegExp(
            '(\\bimport\\s+static\\s+)' + t + '(?:\\w+|\\*)(?=\\s*;)'
          ),
          lookbehind: !0,
          alias: 'static',
          inside: {
            namespace: s.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/,
          },
        },
      ],
      namespace: {
        pattern: RegExp(
          '(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?'.replace(
            /<keyword>/g,
            function () {
              return n.source
            }
          )
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    })
})(Prism)
!(function (e) {
  var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [
      { pattern: /\b(?:false|true)\b/i, alias: 'boolean' },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0,
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
    ],
    i =
      /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n =
      /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/
  e.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: 'important',
    },
    comment: a,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern:
        /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: { punctuation: /\\/ },
    },
    'class-name-definition': {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: 'class-name',
    },
    'function-definition': {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: 'function',
    },
    keyword: [
      {
        pattern:
          /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
        alias: 'type-casting',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
        alias: 'type-hint',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
        alias: 'return-type',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
        alias: 'type-declaration',
        greedy: !0,
      },
      {
        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
        alias: 'type-declaration',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: 'static-context',
        greedy: !0,
      },
      { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
      /\bclass\b/i,
      {
        pattern:
          /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
        lookbehind: !0,
      },
    ],
    'argument-name': {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0,
    },
    'class-name': [
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: 'class-name-fully-qualified',
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: 'type-declaration',
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ['class-name-fully-qualified', 'type-declaration'],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*::)/i,
        alias: 'static-context',
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ['class-name-fully-qualified', 'static-context'],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: 'type-hint',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ['class-name-fully-qualified', 'type-hint'],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: 'return-type',
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ['class-name-fully-qualified', 'return-type'],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
    ],
    constant: t,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: { punctuation: /\\/ },
    },
    property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
    number: i,
    operator: n,
    punctuation: s,
  }
  var l = {
      pattern:
        /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: e.languages.php,
    },
    r = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: 'nowdoc-string',
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: { punctuation: /^<<<'?|[';]$/ },
          },
        },
      },
      {
        pattern:
          /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: 'heredoc-string',
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: { punctuation: /^<<<"?|[";]$/ },
          },
          interpolation: l,
        },
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: 'backtick-quoted-string',
        greedy: !0,
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: 'single-quoted-string',
        greedy: !0,
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: 'double-quoted-string',
        greedy: !0,
        inside: { interpolation: l },
      },
    ]
  e.languages.insertBefore('php', 'variable', {
    string: r,
    attribute: {
      pattern:
        /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        'attribute-content': {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          inside: {
            comment: a,
            string: r,
            'attribute-class-name': [
              {
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: 'class-name',
                greedy: !0,
                lookbehind: !0,
              },
              {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: ['class-name', 'class-name-fully-qualified'],
                greedy: !0,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            ],
            constant: t,
            number: i,
            operator: n,
            punctuation: s,
          },
        },
        delimiter: { pattern: /^#\[|\]$/, alias: 'punctuation' },
      },
    },
  }),
    e.hooks.add('before-tokenize', function (a) {
      ;/<\?/.test(a.code) &&
        e.languages['markup-templating'].buildPlaceholders(
          a,
          'php',
          /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
        )
    }),
    e.hooks.add('after-tokenize', function (a) {
      e.languages['markup-templating'].tokenizePlaceholders(a, 'php')
    })
})(Prism)
!(function (a) {
  var e = (a.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
      lookbehind: !0,
    },
    keyword: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0,
    },
    punctuation: /[{}]/,
  })
  Object.defineProperty(e, 'addSupport', {
    value: function (e, n) {
      'string' == typeof e && (e = [e]),
        e.forEach(function (e) {
          !(function (e, n) {
            var t = 'doc-comment',
              r = a.languages[e]
            if (r) {
              var o = r[t]
              if (
                (o ||
                  (o = (r = a.languages.insertBefore(e, 'comment', {
                    'doc-comment': {
                      pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                      lookbehind: !0,
                      alias: 'comment',
                    },
                  }))[t]),
                o instanceof RegExp && (o = r[t] = { pattern: o }),
                Array.isArray(o))
              )
                for (var i = 0, s = o.length; i < s; i++)
                  o[i] instanceof RegExp && (o[i] = { pattern: o[i] }), n(o[i])
              else n(o)
            }
          })(e, function (a) {
            a.inside || (a.inside = {}), (a.inside.rest = n)
          })
        })
    },
  }),
    e.addSupport(['java', 'javascript', 'php'], e)
})(Prism)
!(function (a) {
  var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
    n =
      '(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>'.replace(
        /<mem>/g,
        function () {
          return '#\\s*\\w+(?:\\s*\\([^()]*\\))?'
        }
      )
  ;(a.languages.javadoc = a.languages.extend('javadoclike', {})),
    a.languages.insertBefore('javadoc', 'keyword', {
      reference: {
        pattern: RegExp(
          '(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:' +
            n +
            ')'
        ),
        lookbehind: !0,
        inside: {
          function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0 },
          field: { pattern: /(#\s*)\w+/, lookbehind: !0 },
          namespace: {
            pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
            inside: { punctuation: /\./ },
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: a.languages.java.keyword,
          punctuation: /[#()[\],.]/,
        },
      },
      'class-name': {
        pattern: /(@param\s+)<[A-Z]\w*>/,
        lookbehind: !0,
        inside: { punctuation: /[.<>]/ },
      },
      'code-section': [
        {
          pattern:
            /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
          lookbehind: !0,
          inside: {
            code: {
              pattern: e,
              lookbehind: !0,
              inside: a.languages.java,
              alias: 'language-java',
            },
          },
        },
        {
          pattern:
            /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
          lookbehind: !0,
          inside: {
            line: {
              pattern: e,
              lookbehind: !0,
              inside: {
                tag: a.languages.markup.tag,
                entity: a.languages.markup.entity,
                code: {
                  pattern: /.+/,
                  inside: a.languages.java,
                  alias: 'language-java',
                },
              },
            },
          },
        },
      ],
      tag: a.languages.markup.tag,
      entity: a.languages.markup.entity,
    }),
    a.languages.javadoclike.addSupport('java', a.languages.javadoc)
})(Prism)
Prism.languages.javastacktrace = {
  summary: {
    pattern:
      /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
    lookbehind: !0,
    inside: {
      keyword: {
        pattern:
          /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
        lookbehind: !0,
      },
      string: { pattern: /^(\s*)"[^"]*"/, lookbehind: !0 },
      exceptions: {
        pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
        lookbehind: !0,
        inside: {
          'class-name': /[\w$]+$/,
          namespace: /\b[a-z]\w*\b/,
          punctuation: /\./,
        },
      },
      message: { pattern: /(:\s*)\S.*/, lookbehind: !0, alias: 'string' },
      punctuation: /:/,
    },
  },
  'stack-frame': {
    pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
    lookbehind: !0,
    inside: {
      keyword: { pattern: /^(\s*)at(?= )/, lookbehind: !0 },
      source: [
        {
          pattern: /(\()\w+\.\w+:\d+(?=\))/,
          lookbehind: !0,
          inside: {
            file: /^\w+\.\w+/,
            punctuation: /:/,
            'line-number': { pattern: /\b\d+\b/, alias: 'number' },
          },
        },
        {
          pattern: /(\()[^()]*(?=\))/,
          lookbehind: !0,
          inside: { keyword: /^(?:Native Method|Unknown Source)$/ },
        },
      ],
      'class-name': /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
      function: /(?:<init>|[\w$]+)(?=\()/,
      'class-loader': {
        pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
        lookbehind: !0,
        alias: 'namespace',
        inside: { punctuation: /\./ },
      },
      module: {
        pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
        lookbehind: !0,
        inside: {
          version: {
            pattern: /(@)[\s\S]+/,
            lookbehind: !0,
            alias: 'number',
          },
          punctuation: /[@.]/,
        },
      },
      namespace: {
        pattern: /(?:\b[a-z]\w*\.)+/,
        inside: { punctuation: /\./ },
      },
      punctuation: /[()/.]/,
    },
  },
  more: {
    pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
    lookbehind: !0,
    inside: {
      punctuation: /\.{3}/,
      number: /\d+/,
      keyword: /\b[a-z]+(?: [a-z]+)*\b/,
    },
  },
}
;(Prism.languages.jolie = Prism.languages.extend('clike', {
  string: {
    pattern: /(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,
    lookbehind: !0,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,
  function: /\b[a-z_]\w*(?=[ \t]*[@(])/i,
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,
  operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,
  punctuation: /[()[\]{},;.:]/,
  builtin:
    /\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/,
})),
  Prism.languages.insertBefore('jolie', 'keyword', {
    aggregates: {
      pattern:
        /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
      lookbehind: !0,
      inside: {
        keyword: /\bwith\b/,
        'class-name': /\w+/,
        punctuation: /,/,
      },
    },
    redirects: {
      pattern:
        /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
      lookbehind: !0,
      inside: { punctuation: /,/, 'class-name': /\w+/, operator: /=>/ },
    },
    property: {
      pattern:
        /\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/,
    },
  })
!(function (e) {
  var n = '\\\\\\((?:[^()]|\\([^()]*\\))*\\)',
    t = RegExp(
      '(^|[^\\\\])"(?:[^"\r\n\\\\]|\\\\[^\r\n(]|__)*"'.replace(
        /__/g,
        function () {
          return n
        }
      )
    ),
    i = {
      interpolation: {
        pattern: RegExp('((?:^|[^\\\\])(?:\\\\{2})*)' + n),
        lookbehind: !0,
        inside: {
          content: {
            pattern: /^(\\\()[\s\S]+(?=\)$)/,
            lookbehind: !0,
            inside: null,
          },
          punctuation: /^\\\(|\)$/,
        },
      },
    },
    a = (e.languages.jq = {
      comment: /#.*/,
      property: {
        pattern: RegExp(t.source + '(?=\\s*:(?!:))'),
        lookbehind: !0,
        greedy: !0,
        inside: i,
      },
      string: { pattern: t, lookbehind: !0, greedy: !0, inside: i },
      function: { pattern: /(\bdef\s+)[a-z_]\w+/i, lookbehind: !0 },
      variable: /\B\$\w+/,
      'property-literal': {
        pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
        alias: 'property',
      },
      keyword:
        /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
      operator: [
        { pattern: /\|=?/, alias: 'pipe' },
        /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/,
      ],
      'c-style-function': {
        pattern: /\b[a-z_]\w*(?=\s*\()/i,
        alias: 'function',
      },
      punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
      dot: { pattern: /\./, alias: 'important' },
    })
  i.interpolation.inside.content.inside = a
})(Prism)
!(function (e) {
  ;(e.languages.typescript = e.languages.extend('javascript', {
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    builtin:
      /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
  })),
    e.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ),
    delete e.languages.typescript.parameter,
    delete e.languages.typescript['literal-property']
  var s = e.languages.extend('typescript', {})
  delete s['class-name'],
    (e.languages.typescript['class-name'].inside = s),
    e.languages.insertBefore('typescript', 'function', {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: { pattern: /^@/, alias: 'operator' },
          function: /^[\s\S]+/,
        },
      },
      'generic-function': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: 'class-name',
            inside: s,
          },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript)
})(Prism)
!(function (e) {
  var a = e.languages.javascript,
    n = '\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}',
    t = '(@(?:arg|argument|param|property)\\s+(?:' + n + '\\s+)?)'
  ;(e.languages.jsdoc = e.languages.extend('javadoclike', {
    parameter: {
      pattern: RegExp(t + '(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)'),
      lookbehind: !0,
      inside: { punctuation: /\./ },
    },
  })),
    e.languages.insertBefore('jsdoc', 'keyword', {
      'optional-parameter': {
        pattern: RegExp(
          t + '\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)'
        ),
        lookbehind: !0,
        inside: {
          parameter: {
            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
            lookbehind: !0,
            inside: { punctuation: /\./ },
          },
          code: {
            pattern: /(=)[\s\S]*(?=\]$)/,
            lookbehind: !0,
            inside: a,
            alias: 'language-javascript',
          },
          punctuation: /[=[\]]/,
        },
      },
      'class-name': [
        {
          pattern: RegExp(
            '(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*'.replace(
              /<TYPE>/g,
              function () {
                return n
              }
            )
          ),
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
        {
          pattern: RegExp('(@[a-z]+\\s+)' + n),
          lookbehind: !0,
          inside: {
            string: a.string,
            number: a.number,
            boolean: a.boolean,
            keyword: e.languages.typescript.keyword,
            operator: /=>|\.\.\.|[&|?:*]/,
            punctuation: /[.,;=<>{}()[\]]/,
          },
        },
      ],
      example: {
        pattern:
          /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
        lookbehind: !0,
        inside: {
          code: {
            pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
            lookbehind: !0,
            inside: a,
            alias: 'language-javascript',
          },
        },
      },
    }),
    e.languages.javadoclike.addSupport('javascript', e.languages.jsdoc)
})(Prism)
!(function (a) {
  function e(a, e) {
    return RegExp(
      a.replace(/<ID>/g, function () {
        return '(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*'
      }),
      e
    )
  }
  a.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp(
        '(\\.\\s*)' + a.languages.javascript['function-variable'].pattern.source
      ),
      lookbehind: !0,
      alias: ['function-variable', 'method', 'function', 'property-access'],
    },
  }),
    a.languages.insertBefore('javascript', 'function', {
      method: {
        pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
        lookbehind: !0,
        alias: ['function', 'property-access'],
      },
    }),
    a.languages.insertBefore('javascript', 'constant', {
      'known-class-name': [
        {
          pattern:
            /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
          alias: 'class-name',
        },
        { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
      ],
    }),
    a.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: e(
          '(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)'
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
      exports: {
        pattern: e(
          '(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})'
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
    }),
    a.languages.javascript.keyword.unshift(
      {
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: 'module',
      },
      {
        pattern:
          /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
        alias: 'control-flow',
      },
      { pattern: /\bnull\b/, alias: ['null', 'nil'] },
      { pattern: /\bundefined\b/, alias: 'nil' }
    ),
    a.languages.insertBefore('javascript', 'operator', {
      spread: { pattern: /\.{3}/, alias: 'operator' },
      arrow: { pattern: /=>/, alias: 'operator' },
    }),
    a.languages.insertBefore('javascript', 'punctuation', {
      'property-access': {
        pattern: e('(\\.\\s*)#?<ID>'),
        lookbehind: !0,
      },
      'maybe-class-name': {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0,
      },
      dom: {
        pattern:
          /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: 'variable',
      },
      console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
    })
  for (
    var t = [
        'function',
        'function-variable',
        'method',
        'method-variable',
        'property-access',
      ],
      r = 0;
    r < t.length;
    r++
  ) {
    var n = t[r],
      s = a.languages.javascript[n]
    'RegExp' === a.util.type(s) &&
      (s = a.languages.javascript[n] = { pattern: s })
    var o = s.inside || {}
    ;(s.inside = o), (o['maybe-class-name'] = /^[A-Z][\s\S]*/)
  }
})(Prism)
;(Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: 'keyword' },
}),
  (Prism.languages.webmanifest = Prism.languages.json)
!(function (n) {
  var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/
  n.languages.json5 = n.languages.extend('json', {
    property: [
      { pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 },
      {
        pattern:
          /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: 'unquoted',
      },
    ],
    string: { pattern: e, greedy: !0 },
    number:
      /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
  })
})(Prism)
;(Prism.languages.jsonp = Prism.languages.extend('json', {
  punctuation: /[{}[\]();,.]/,
})),
  Prism.languages.insertBefore('jsonp', 'punctuation', {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
  })
!(function (e) {
  var t = e.languages.javascript['template-string'],
    n = t.pattern.source,
    r = t.inside.interpolation,
    a = r.inside['interpolation-punctuation'],
    i = r.pattern.source
  function o(t, r) {
    if (e.languages[t])
      return {
        pattern: RegExp('((?:' + r + ')\\s*)' + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string',
          },
          'embedded-code': { pattern: /[\s\S]+/, alias: t },
        },
      }
  }
  function s(e, t) {
    return '___' + t.toUpperCase() + '_' + e + '___'
  }
  function p(t, n, r) {
    var a = { code: t, grammar: n, language: r }
    return (
      e.hooks.run('before-tokenize', a),
      (a.tokens = e.tokenize(a.code, a.grammar)),
      e.hooks.run('after-tokenize', a),
      a.tokens
    )
  }
  function l(t) {
    var n = {}
    n['interpolation-punctuation'] = a
    var i = e.tokenize(t, n)
    if (3 === i.length) {
      var o = [1, 1]
      o.push.apply(o, p(i[1], e.languages.javascript, 'javascript')),
        i.splice.apply(i, o)
    }
    return new e.Token('interpolation', i, r.alias, t)
  }
  function g(t, n, r) {
    var a = e.tokenize(t, {
        interpolation: { pattern: RegExp(i), lookbehind: !0 },
      }),
      o = 0,
      g = {},
      u = p(
        a
          .map(function (e) {
            if ('string' == typeof e) return e
            for (var n, a = e.content; -1 !== t.indexOf((n = s(o++, r))); );
            return (g[n] = a), n
          })
          .join(''),
        n,
        r
      ),
      c = Object.keys(g)
    return (
      (o = 0),
      (function e(t) {
        for (var n = 0; n < t.length; n++) {
          if (o >= c.length) return
          var r = t[n]
          if ('string' == typeof r || 'string' == typeof r.content) {
            var a = c[o],
              i = 'string' == typeof r ? r : r.content,
              s = i.indexOf(a)
            if (-1 !== s) {
              ++o
              var p = i.substring(0, s),
                u = l(g[a]),
                f = i.substring(s + a.length),
                y = []
              if ((p && y.push(p), y.push(u), f)) {
                var v = [f]
                e(v), y.push.apply(y, v)
              }
              'string' == typeof r
                ? (t.splice.apply(t, [n, 1].concat(y)), (n += y.length - 1))
                : (r.content = y)
            }
          } else {
            var d = r.content
            Array.isArray(d) ? e(d) : e([d])
          }
        }
      })(u),
      new e.Token(r, u, 'language-' + r, t)
    )
  }
  e.languages.javascript['template-string'] = [
    o(
      'css',
      '\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)'
    ),
    o('html', '\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?='),
    o('svg', '\\bsvg'),
    o('markdown', '\\b(?:markdown|md)'),
    o('graphql', '\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)'),
    o('sql', '\\bsql'),
    t,
  ].filter(Boolean)
  var u = {
    javascript: !0,
    js: !0,
    typescript: !0,
    ts: !0,
    jsx: !0,
    tsx: !0,
  }
  function c(e) {
    return 'string' == typeof e
      ? e
      : Array.isArray(e)
      ? e.map(c).join('')
      : c(e.content)
  }
  e.hooks.add('after-tokenize', function (t) {
    t.language in u &&
      (function t(n) {
        for (var r = 0, a = n.length; r < a; r++) {
          var i = n[r]
          if ('string' != typeof i) {
            var o = i.content
            if (Array.isArray(o))
              if ('template-string' === i.type) {
                var s = o[1]
                if (
                  3 === o.length &&
                  'string' != typeof s &&
                  'embedded-code' === s.type
                ) {
                  var p = c(s),
                    l = s.alias,
                    u = Array.isArray(l) ? l[0] : l,
                    f = e.languages[u]
                  if (!f) continue
                  o[1] = g(p, f, u)
                }
              } else t(o)
            else 'string' != typeof o && t([o])
          }
        }
      })(t.tokens)
  })
})(Prism)
Prism.languages.julia = {
  comment: {
    pattern:
      /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
    lookbehind: !0,
  },
  regex: { pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/, greedy: !0 },
  string: {
    pattern:
      /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
    greedy: !0,
  },
  char: {
    pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
  boolean: /\b(?:false|true)\b/,
  number:
    /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
  operator:
    /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
  punctuation: /::?|[{}[\]();,.?]/,
  constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/,
}
Prism.languages.keyman = {
  comment: { pattern: /\bc .*/i, greedy: !0 },
  string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 },
  'virtual-key': {
    pattern:
      /\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,
    greedy: !0,
    alias: 'function',
  },
  'header-keyword': { pattern: /&\w+/, alias: 'bold' },
  'header-statement': {
    pattern:
      /\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,
    alias: 'bold',
  },
  'rule-keyword': {
    pattern:
      /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,
    alias: 'keyword',
  },
  'structural-keyword': {
    pattern:
      /\b(?:ansi|begin|group|match|newcontext|nomatch|postkeystroke|readonly|unicode|using keys)\b/i,
    alias: 'keyword',
  },
  'compile-target': {
    pattern: /\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,
    alias: 'property',
  },
  number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
  operator: /[+>\\$]|\.\./,
  punctuation: /[()=,]/,
}
!(function (n) {
  ;(n.languages.kotlin = n.languages.extend('clike', {
    keyword: {
      pattern:
        /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0,
    },
    function: [
      { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
      {
        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
        lookbehind: !0,
        greedy: !0,
      },
    ],
    number:
      /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator:
      /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
  })),
    delete n.languages.kotlin['class-name']
  var e = {
    'interpolation-punctuation': {
      pattern: /^\$\{?|\}$/,
      alias: 'punctuation',
    },
    expression: { pattern: /[\s\S]+/, inside: n.languages.kotlin },
  }
  n.languages.insertBefore('kotlin', 'string', {
    'string-literal': [
      {
        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
        alias: 'multiline',
        inside: {
          interpolation: {
            pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
            inside: e,
          },
          string: /[\s\S]+/,
        },
      },
      {
        pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
        alias: 'singleline',
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
            lookbehind: !0,
            inside: e,
          },
          string: /[\s\S]+/,
        },
      },
    ],
    char: {
      pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
      greedy: !0,
    },
  }),
    delete n.languages.kotlin.string,
    n.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin',
      },
    }),
    n.languages.insertBefore('kotlin', 'function', {
      label: { pattern: /\b\w+@|@\w+\b/, alias: 'symbol' },
    }),
    (n.languages.kt = n.languages.kotlin),
    (n.languages.kts = n.languages.kotlin)
})(Prism)
!(function (a) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
    n = { 'equation-command': { pattern: e, alias: 'regex' } }
  ;(a.languages.latex = {
    comment: /%.*/,
    cdata: {
      pattern:
        /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0,
    },
    equation: [
      {
        pattern:
          /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: n,
        alias: 'string',
      },
      {
        pattern:
          /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: n,
        alias: 'string',
      },
    ],
    keyword: {
      pattern:
        /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
    },
    url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
    headline: {
      pattern:
        /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: 'class-name',
    },
    function: { pattern: e, alias: 'selector' },
    punctuation: /[[\]{}&]/,
  }),
    (a.languages.tex = a.languages.latex),
    (a.languages.context = a.languages.latex)
})(Prism)
!(function (a) {
  a.languages.latte = {
    comment: /^\{\*[\s\S]*/,
    'latte-tag': {
      pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
      lookbehind: !0,
      alias: 'important',
    },
    delimiter: { pattern: /^\{\/?|\}$/, alias: 'punctuation' },
    php: {
      pattern: /\S(?:[\s\S]*\S)?/,
      alias: 'language-php',
      inside: a.languages.php,
    },
  }
  var t = a.languages.extend('markup', {})
  a.languages.insertBefore(
    'inside',
    'attr-value',
    {
      'n-attr': {
        pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
        inside: {
          'attr-name': { pattern: /^[^\s=]+/, alias: 'important' },
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              punctuation: [
                /^=/,
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
              ],
              php: {
                pattern: /\S(?:[\s\S]*\S)?/,
                inside: a.languages.php,
              },
            },
          },
        },
      },
    },
    t.tag
  ),
    a.hooks.add('before-tokenize', function (e) {
      'latte' === e.language &&
        (a.languages['markup-templating'].buildPlaceholders(
          e,
          'latte',
          /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g
        ),
        (e.grammar = t))
    }),
    a.hooks.add('after-tokenize', function (t) {
      a.languages['markup-templating'].tokenizePlaceholders(t, 'latte')
    })
})(Prism)
;(Prism.languages.less = Prism.languages.extend('css', {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern:
      /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ },
  },
  selector: {
    pattern:
      /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ },
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  operator: /[+\-*\/]/,
})),
  Prism.languages.insertBefore('less', 'property', {
    variable: [
      { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
      /@@?[\w-]+/,
    ],
    'mixin-usage': {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: 'function',
    },
  })
!(function (e) {
  e.languages.scheme = {
    comment:
      /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
    string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
    symbol: { pattern: /'[^()\[\]#'\s]+/, greedy: !0 },
    char: {
      pattern:
        /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
      greedy: !0,
    },
    'lambda-parameter': [
      {
        pattern:
          /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,
        lookbehind: !0,
      },
      {
        pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,
        lookbehind: !0,
      },
    ],
    keyword: {
      pattern:
        /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,
      lookbehind: !0,
    },
    builtin: {
      pattern:
        /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,
      lookbehind: !0,
    },
    operator: {
      pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,
      lookbehind: !0,
    },
    number: {
      pattern: RegExp(
        (function (e) {
          for (var r in e)
            e[r] = e[r].replace(/<[\w\s]+>/g, function (r) {
              return '(?:' + e[r].trim() + ')'
            })
          return e[r]
        })({
          '<ureal dec>':
            '\\d+(?:/\\d+)|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[esfdl][+-]?\\d+)?',
          '<real dec>': '[+-]?<ureal dec>|[+-](?:inf|nan)\\.0',
          '<imaginary dec>': '[+-](?:<ureal dec>|(?:inf|nan)\\.0)?i',
          '<complex dec>':
            '<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>',
          '<num dec>': '(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>',
          '<ureal box>': '[0-9a-f]+(?:/[0-9a-f]+)?',
          '<real box>': '[+-]?<ureal box>|[+-](?:inf|nan)\\.0',
          '<imaginary box>': '[+-](?:<ureal box>|(?:inf|nan)\\.0)?i',
          '<complex box>':
            '<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>',
          '<num box>': '#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>',
          '<number>':
            '(^|[()\\[\\]\\s])(?:<num dec>|<num box>)(?=[()\\[\\]\\s]|$)',
        }),
        'i'
      ),
      lookbehind: !0,
    },
    boolean: {
      pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,
      lookbehind: !0,
    },
    function: {
      pattern:
        /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,
      lookbehind: !0,
    },
    identifier: {
      pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,
      lookbehind: !0,
      greedy: !0,
    },
    punctuation: /[()\[\]']/,
  }
})(Prism)
!(function (e) {
  for (
    var n =
        '\\((?:[^();"#\\\\]|\\\\[^]|;.*(?!.)|"(?:[^"\\\\]|\\\\.)*"|#(?:\\{(?:(?!#\\})[^])*#\\}|[^{])|<expr>)*\\)',
      i = 0;
    i < 5;
    i++
  )
    n = n.replace(/<expr>/g, function () {
      return n
    })
  n = n.replace(/<expr>/g, '[^\\s\\S]')
  var d = (e.languages.lilypond = {
    comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
    'embedded-scheme': {
      pattern: RegExp(
        '(^|[=\\s])#(?:"(?:[^"\\\\]|\\\\.)*"|[^\\s()"]*(?:[^\\s()]|<expr>))'.replace(
          /<expr>/g,
          function () {
            return n
          }
        ),
        'm'
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        scheme: {
          pattern: /^(#)[\s\S]+$/,
          lookbehind: !0,
          alias: 'language-scheme',
          inside: {
            'embedded-lilypond': {
              pattern: /#\{[\s\S]*?#\}/,
              greedy: !0,
              inside: {
                punctuation: /^#\{|#\}$/,
                lilypond: {
                  pattern: /[\s\S]+/,
                  alias: 'language-lilypond',
                  inside: null,
                },
              },
            },
            rest: e.languages.scheme,
          },
        },
        punctuation: /#/,
      },
    },
    string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
    'class-name': { pattern: /(\\new\s+)[\w-]+/, lookbehind: !0 },
    keyword: { pattern: /\\[a-z][-\w]*/i, inside: { punctuation: /^\\/ } },
    operator: /[=|]|<<|>>/,
    punctuation: {
      pattern:
        /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
      lookbehind: !0,
    },
    number: /\b\d+(?:\/\d+)?\b/,
  })
  ;(d['embedded-scheme'].inside.scheme.inside[
    'embedded-lilypond'
  ].inside.lilypond.inside = d),
    (e.languages.ly = d)
})(Prism)
;(Prism.languages.liquid = {
  comment: {
    pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
    lookbehind: !0,
  },
  delimiter: {
    pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
    alias: 'punctuation',
  },
  string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
  keyword:
    /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
  object:
    /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
  function: [
    { pattern: /(\|\s*)\w+/, lookbehind: !0, alias: 'filter' },
    { pattern: /(\.\s*)(?:first|last|size)/, lookbehind: !0 },
  ],
  boolean: /\b(?:false|nil|true)\b/,
  range: { pattern: /\.\./, alias: 'operator' },
  number: /\b\d+(?:\.\d+)?\b/,
  operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
  punctuation: /[.,\[\]()]/,
  empty: { pattern: /\bempty\b/, alias: 'keyword' },
}),
  Prism.hooks.add('before-tokenize', function (e) {
    var t = !1
    Prism.languages['markup-templating'].buildPlaceholders(
      e,
      'liquid',
      /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,
      function (e) {
        var n = /^\{%-?\s*(\w+)/.exec(e)
        if (n) {
          var i = n[1]
          if ('raw' === i && !t) return (t = !0), !0
          if ('endraw' === i) return (t = !1), !0
        }
        return !t
      }
    )
  }),
  Prism.hooks.add('after-tokenize', function (e) {
    Prism.languages['markup-templating'].tokenizePlaceholders(e, 'liquid')
  })
!(function (e) {
  function n(e) {
    return RegExp('(\\()(?:' + e + ')(?=[\\s\\)])')
  }
  function a(e) {
    return RegExp('([\\s([])(?:' + e + ')(?=[\\s)])')
  }
  var t = '(?!\\d)[-+*/~!@$%^=<>{}\\w]+',
    r = '(\\()',
    i =
      '(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*',
    s = {
      heading: { pattern: /;;;.*/, alias: ['comment', 'title'] },
      comment: /;.*/,
      string: {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: !0,
        inside: {
          argument: /[-A-Z]+(?=[.,\s])/,
          symbol: RegExp('`' + t + "'"),
        },
      },
      'quoted-symbol': {
        pattern: RegExp("#?'" + t),
        alias: ['variable', 'symbol'],
      },
      'lisp-property': { pattern: RegExp(':' + t), alias: 'property' },
      splice: {
        pattern: RegExp(',@?' + t),
        alias: ['symbol', 'variable'],
      },
      keyword: [
        {
          pattern: RegExp(
            '(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)'
          ),
          lookbehind: !0,
        },
        {
          pattern: RegExp(
            '(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)'
          ),
          lookbehind: !0,
        },
      ],
      declare: {
        pattern: n('declare'),
        lookbehind: !0,
        alias: 'keyword',
      },
      interactive: {
        pattern: n('interactive'),
        lookbehind: !0,
        alias: 'keyword',
      },
      boolean: { pattern: a('nil|t'), lookbehind: !0 },
      number: { pattern: a('[-+]?\\d+(?:\\.\\d*)?'), lookbehind: !0 },
      defvar: {
        pattern: RegExp('(\\()def(?:const|custom|group|var)\\s+' + t),
        lookbehind: !0,
        inside: { keyword: /^def[a-z]+/, variable: RegExp(t) },
      },
      defun: {
        pattern: RegExp(
          '(\\()(?:cl-)?(?:defmacro|defun\\*?)\\s+' + t + '\\s+\\(' + i + '\\)'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          keyword: /^(?:cl-)?def\S+/,
          arguments: null,
          function: { pattern: RegExp('(^\\s)' + t), lookbehind: !0 },
          punctuation: /[()]/,
        },
      },
      lambda: {
        pattern: RegExp(
          '(\\()lambda\\s+\\(\\s*(?:&?' + t + '(?:\\s+&?' + t + ')*\\s*)?\\)'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          keyword: /^lambda/,
          arguments: null,
          punctuation: /[()]/,
        },
      },
      car: { pattern: RegExp(r + t), lookbehind: !0 },
      punctuation: [
        /(?:['`,]?\(|[)\[\]])/,
        { pattern: /(\s)\.(?=\s)/, lookbehind: !0 },
      ],
    },
    l = {
      'lisp-marker': RegExp('&(?!\\d)[-+*/~!@$%^=<>{}\\w]+'),
      varform: {
        pattern: RegExp('\\(' + t + '\\s+(?=\\S)' + i + '\\)'),
        inside: s,
      },
      argument: {
        pattern: RegExp('(^|[\\s(])' + t),
        lookbehind: !0,
        alias: 'variable',
      },
      rest: s,
    },
    o = '\\S+(?:\\s+\\S+)*',
    p = {
      pattern: RegExp(r + i + '(?=\\))'),
      lookbehind: !0,
      inside: {
        'rest-vars': {
          pattern: RegExp('&(?:body|rest)\\s+' + o),
          inside: l,
        },
        'other-marker-vars': {
          pattern: RegExp('&(?:aux|optional)\\s+' + o),
          inside: l,
        },
        keys: {
          pattern: RegExp('&key\\s+' + o + '(?:\\s+&allow-other-keys)?'),
          inside: l,
        },
        argument: { pattern: RegExp(t), alias: 'variable' },
        punctuation: /[()]/,
      },
    }
  ;(s.lambda.inside.arguments = p),
    (s.defun.inside.arguments = e.util.clone(p)),
    (s.defun.inside.arguments.inside.sublist = p),
    (e.languages.lisp = s),
    (e.languages.elisp = s),
    (e.languages.emacs = s),
    (e.languages['emacs-lisp'] = s)
})(Prism)
;(Prism.languages.livescript = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
    { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
  ],
  'interpolated-string': {
    pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      variable: {
        pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
        lookbehind: !0,
      },
      interpolation: {
        pattern: /(^|[^\\])#\{[^}]+\}/m,
        lookbehind: !0,
        inside: {
          'interpolation-punctuation': {
            pattern: /^#\{|\}$/,
            alias: 'variable',
          },
        },
      },
      string: /[\s\S]+/,
    },
  },
  string: [
    { pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
    { pattern: /<\[[\s\S]*?\]>/, greedy: !0 },
    /\\[^\s,;\])}]+/,
  ],
  regex: [
    {
      pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
      greedy: !0,
      inside: { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 } },
    },
    {
      pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
      greedy: !0,
    },
  ],
  keyword: {
    pattern:
      /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
    lookbehind: !0,
  },
  'keyword-operator': {
    pattern:
      /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
    lookbehind: !0,
    alias: 'operator',
  },
  boolean: {
    pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
    lookbehind: !0,
  },
  argument: {
    pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
    lookbehind: !0,
    alias: 'variable',
  },
  number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
  identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
  operator: [
    { pattern: /( )\.(?= )/, lookbehind: !0 },
    /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/,
  ],
  punctuation: /[(){}\[\]|.,:;`]/,
}),
  (Prism.languages.livescript[
    'interpolated-string'
  ].inside.interpolation.inside.rest = Prism.languages.livescript)
Prism.languages.lolcode = {
  comment: [/\bOBTW\s[\s\S]*?\sTLDR\b/, /\bBTW.+/],
  string: {
    pattern: /"(?::.|[^":])*"/,
    inside: {
      variable: /:\{[^}]+\}/,
      symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/],
    },
    greedy: !0,
  },
  number: /(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/,
  symbol: {
    pattern: /(^|\s)(?:A )?(?:BUKKIT|NOOB|NUMBAR|NUMBR|TROOF|YARN)(?=\s|,|$)/,
    lookbehind: !0,
    inside: { keyword: /A(?=\s)/ },
  },
  label: {
    pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
    lookbehind: !0,
    alias: 'string',
  },
  function: {
    pattern: /((?:^|\s)(?:HOW IZ I|I IZ|IZ) )[a-zA-Z]\w*/,
    lookbehind: !0,
  },
  keyword: [
    {
      pattern:
        /(^|\s)(?:AN|FOUND YR|GIMMEH|GTFO|HAI|HAS A|HOW IZ I|I HAS A|I IZ|IF U SAY SO|IM IN YR|IM OUTTA YR|IS NOW(?: A)?|ITZ(?: A)?|IZ|KTHX|KTHXBYE|LIEK(?: A)?|MAEK|MEBBE|MKAY|NERFIN|NO WAI|O HAI IM|O RLY\?|OIC|OMG|OMGWTF|R|SMOOSH|SRS|TIL|UPPIN|VISIBLE|WILE|WTF\?|YA RLY|YR)(?=\s|,|$)/,
      lookbehind: !0,
    },
    /'Z(?=\s|,|$)/,
  ],
  boolean: { pattern: /(^|\s)(?:FAIL|WIN)(?=\s|,|$)/, lookbehind: !0 },
  variable: { pattern: /(^|\s)IT(?=\s|,|$)/, lookbehind: !0 },
  operator: {
    pattern:
      /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:ALL|ANY|BIGGR|BOTH|DIFF|EITHER|MOD|PRODUKT|QUOSHUNT|SMALLR|SUM|WON) OF)(?=\s|,|$)/,
    lookbehind: !0,
  },
  punctuation: /\.{3}|…|,|!/,
}
Prism.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin',
  },
  target: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword:
    /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  function: {
    pattern:
      /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: !0,
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/,
}
!(function (n) {
  function e(n) {
    return (
      (n = n.replace(/<inner>/g, function () {
        return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))'
      })),
      RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
    )
  }
  var t = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
    a = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))'.replace(
      /__/g,
      function () {
        return t
      }
    ),
    i = '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)'
  ;(n.languages.markdown = n.languages.extend('markup', {})),
    n.languages.insertBefore('markdown', 'prolog', {
      'front-matter-block': {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          'front-matter': {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ['yaml', 'language-yaml'],
            inside: n.languages.yaml,
          },
        },
      },
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
      table: {
        pattern: RegExp('^' + a + i + '(?:' + a + ')*', 'm'),
        inside: {
          'table-data-rows': {
            pattern: RegExp('^(' + a + i + ')(?:' + a + ')*$'),
            lookbehind: !0,
            inside: {
              'table-data': {
                pattern: RegExp(t),
                inside: n.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          'table-line': {
            pattern: RegExp('^(' + a + ')' + i + '$'),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ },
          },
          'table-header-row': {
            pattern: RegExp('^' + a + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(t),
                alias: 'important',
                inside: n.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: 'keyword',
        },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: !0,
            },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: { punctuation: /==+$|--+$/ },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: 'important',
          inside: { punctuation: /^#+|#+$/ },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: 'punctuation',
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: 'punctuation',
      },
      'url-reference': {
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: 'url',
      },
      bold: {
        pattern: e(
          '\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: e(
          '\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: e('(~~?)(?:(?!~)<inner>)+\\2'),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      'code-snippet': {
        pattern:
          /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ['code', 'keyword'],
      },
      url: {
        pattern: e(
          '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {},
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0,
          },
          url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ['url', 'bold', 'italic', 'strike'].forEach(function (e) {
      ;['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
        t
      ) {
        e !== t &&
          (n.languages.markdown[e].inside.content.inside[t] =
            n.languages.markdown[t])
      })
    }),
    n.hooks.add('after-tokenize', function (n) {
      ;('markdown' !== n.language && 'md' !== n.language) ||
        (function n(e) {
          if (e && 'string' != typeof e)
            for (var t = 0, a = e.length; t < a; t++) {
              var i = e[t]
              if ('code' === i.type) {
                var r = i.content[1],
                  o = i.content[3]
                if (
                  r &&
                  o &&
                  'code-language' === r.type &&
                  'code-block' === o.type &&
                  'string' == typeof r.content
                ) {
                  var l = r.content
                      .replace(/\b#/g, 'sharp')
                      .replace(/\b\+\+/g, 'pp'),
                    s =
                      'language-' +
                      (l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase())
                  o.alias
                    ? 'string' == typeof o.alias
                      ? (o.alias = [o.alias, s])
                      : o.alias.push(s)
                    : (o.alias = [s])
                }
              } else n(i.content)
            }
        })(n.tokens)
    }),
    n.hooks.add('wrap', function (e) {
      if ('code-block' === e.type) {
        for (var t = '', a = 0, i = e.classes.length; a < i; a++) {
          var s = e.classes[a],
            d = /language-(.+)/.exec(s)
          if (d) {
            t = d[1]
            break
          }
        }
        var p = n.languages[t]
        if (p)
          e.content = n.highlight(
            e.content
              .replace(r, '')
              .replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (n, e) {
                var t
                return '#' === (e = e.toLowerCase())[0]
                  ? ((t =
                      'x' === e[1]
                        ? parseInt(e.slice(2), 16)
                        : Number(e.slice(1))),
                    l(t))
                  : o[e] || n
              }),
            p,
            t
          )
        else if (t && 'none' !== t && n.plugins.autoloader) {
          var u =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(1e16 * Math.random())
          ;(e.attributes.id = u),
            n.plugins.autoloader.loadLanguages(t, function () {
              var e = document.getElementById(u)
              e && (e.innerHTML = n.highlight(e.textContent, n.languages[t], t))
            })
        }
      }
    })
  var r = RegExp(n.languages.markup.tag.pattern.source, 'gi'),
    o = { amp: '&', lt: '<', gt: '>', quot: '"' },
    l = String.fromCodePoint || String.fromCharCode
  n.languages.md = n.languages.markdown
})(Prism)
Prism.languages.matlab = {
  comment: [/%\{[\s\S]*?\}%/, /%.+/],
  string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
  keyword:
    /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  function: /\b(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/,
}
;(Prism.languages.mel = {
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 },
  code: {
    pattern: /`(?:\\.|[^\\`])*`/,
    greedy: !0,
    alias: 'italic',
    inside: {
      delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
      statement: { pattern: /[\s\S]+/, inside: null },
    },
  },
  string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
  variable: /\$\w+/,
  number: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,
  flag: { pattern: /-[^\d\W]\w*/, alias: 'operator' },
  keyword:
    /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
  function: {
    pattern:
      /((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,
    lookbehind: !0,
    greedy: !0,
  },
  'tensor-punctuation': { pattern: /<<|>>/, alias: 'punctuation' },
  operator: /\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,
  punctuation: /[.,:;?\[\](){}]/,
}),
  (Prism.languages.mel.code.inside.statement.inside = Prism.languages.mel)
Prism.languages.mizar = {
  comment: /::.+/,
  keyword:
    /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|end|environ|equals|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:ies|y)|when|where|with|wrt)\b/,
  parameter: { pattern: /\$(?:10|\d)/, alias: 'variable' },
  variable: /\b\w+(?=:)/,
  number: /(?:\b|-)\d+\b/,
  operator: /\.\.\.|->|&|\.?=/,
  punctuation: /\(#|#\)|[,:;\[\](){}]/,
}
Prism.languages.monkey = {
  comment: { pattern: /^#Rem\s[\s\S]*?^#End|'.+/im, greedy: !0 },
  string: { pattern: /"[^"\r\n]*"/, greedy: !0 },
  preprocessor: {
    pattern: /(^[ \t]*)#.+/m,
    lookbehind: !0,
    greedy: !0,
    alias: 'property',
  },
  function: /\b\w+(?=\()/,
  'type-char': { pattern: /\b[?%#$]/, alias: 'class-name' },
  number: {
    pattern:
      /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
    lookbehind: !0,
  },
  keyword:
    /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
  operator:
    /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
  punctuation: /[.,:;()\[\]]/,
}
;(Prism.languages.moonscript = {
  comment: /--.*/,
  string: [
    { pattern: /'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/, greedy: !0 },
    {
      pattern: /"[^"]*"/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /#\{[^{}]*\}/,
          inside: {
            moonscript: {
              pattern: /(^#\{)[\s\S]+(?=\})/,
              lookbehind: !0,
              inside: null,
            },
            'interpolation-punctuation': {
              pattern: /#\{|\}/,
              alias: 'punctuation',
            },
          },
        },
      },
    },
  ],
  'class-name': [
    { pattern: /(\b(?:class|extends)[ \t]+)\w+/, lookbehind: !0 },
    /\b[A-Z]\w*/,
  ],
  keyword:
    /\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,
  variable: /@@?\w*/,
  property: { pattern: /\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/, lookbehind: !0 },
  function: {
    pattern:
      /\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:create|resume|running|status|wrap|yield)|debug\.(?:debug|getfenv|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|setfenv|sethook|setlocal|setmetatable|setupvalue|traceback)|dofile|error|getfenv|getmetatable|io\.(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\.(?:concat|insert|maxn|remove|sort)|tonumber|tostring|type|unpack|xpcall)\b/,
    inside: { punctuation: /\./ },
  },
  boolean: /\b(?:false|true)\b/,
  number:
    /(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,
  operator:
    /\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,
  punctuation: /[.,()[\]{}\\]/,
}),
  (Prism.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside =
    Prism.languages.moonscript),
  (Prism.languages.moon = Prism.languages.moonscript)
Prism.languages.n1ql = {
  comment: { pattern: /\/\*[\s\S]*?(?:$|\*\/)|--.*/, greedy: !0 },
  string: { pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/, greedy: !0 },
  identifier: { pattern: /`(?:\\[\s\S]|[^\\`]|``)*`/, greedy: !0 },
  parameter: /\$[\w.]+/,
  keyword:
    /\b(?:ADVISE|ALL|ALTER|ANALYZE|AS|ASC|AT|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|COMMITTED|CONNECT|CONTINUE|CORRELATE|CORRELATED|COVER|CREATE|CURRENT|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FILTER|FLATTEN|FLUSH|FOLLOWING|FOR|FORCE|FROM|FTS|FUNCTION|GOLANG|GRANT|GROUP|GROUPS|GSI|HASH|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|ISOLATION|JAVASCRIPT|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LANGUAGE|LAST|LEFT|LET|LETTING|LEVEL|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NL|NO|NTH_VALUE|NULL|NULLS|NUMBER|OBJECT|OFFSET|ON|OPTION|OPTIONS|ORDER|OTHERS|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PRECEDING|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROBE|PROCEDURE|PUBLIC|RANGE|RAW|REALM|REDUCE|RENAME|RESPECT|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|ROW|ROWS|SATISFIES|SAVEPOINT|SCHEMA|SCOPE|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TIES|TO|TRAN|TRANSACTION|TRIGGER|TRUNCATE|UNBOUNDED|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WINDOW|WITH|WORK|XOR)\b/i,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  boolean: /\b(?:FALSE|TRUE)\b/i,
  number: /(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,
  punctuation: /[;[\](),.{}:]/,
}
;(Prism.languages.n4js = Prism.languages.extend('javascript', {
  keyword:
    /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
})),
  Prism.languages.insertBefore('n4js', 'constant', {
    annotation: { pattern: /@+\w+/, alias: 'operator' },
  }),
  (Prism.languages.n4jsd = Prism.languages.n4js)
Prism.languages['nand2tetris-hdl'] = {
  comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  keyword: /\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
  number: /\b\d+\b/,
  operator: /=|\.\./,
  punctuation: /[{}[\];(),:]/,
}
Prism.languages.nasm = {
  comment: /;.*$/m,
  string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
  label: {
    pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
    lookbehind: !0,
    alias: 'function',
  },
  keyword: [
    /\[?BITS (?:16|32|64)\]?/,
    { pattern: /(^\s*)section\s*[a-z.]+:?/im, lookbehind: !0 },
    /(?:extern|global)[^;\r\n]*/i,
    /(?:CPU|DEFAULT|FLOAT).*$/m,
  ],
  register: {
    pattern:
      /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
    alias: 'variable',
  },
  number:
    /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
  operator: /[\[\]*+\-\/%<>=&|$!]/,
}
Prism.languages.neon = {
  comment: { pattern: /#.*/, greedy: !0 },
  datetime: {
    pattern:
      /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
    lookbehind: !0,
    alias: 'number',
  },
  key: {
    pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
    lookbehind: !0,
    alias: 'property',
  },
  number: {
    pattern:
      /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
    lookbehind: !0,
  },
  boolean: {
    pattern: /(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,
    lookbehind: !0,
  },
  null: {
    pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
    lookbehind: !0,
    alias: 'keyword',
  },
  string: {
    pattern:
      /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
    lookbehind: !0,
    greedy: !0,
  },
  literal: {
    pattern:
      /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
    lookbehind: !0,
    alias: 'string',
  },
  punctuation: /[,:=[\]{}()-]/,
}
!(function (e) {
  var n = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i
  e.languages.nginx = {
    comment: { pattern: /(^|[\s{};])#.*/, lookbehind: !0, greedy: !0 },
    directive: {
      pattern:
        /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: {
          pattern:
            /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            escape: { pattern: /\\["'\\nrt]/, alias: 'entity' },
            variable: n,
          },
        },
        comment: { pattern: /(\s)#.*/, lookbehind: !0, greedy: !0 },
        keyword: { pattern: /^\S+/, greedy: !0 },
        boolean: { pattern: /(\s)(?:off|on)(?!\S)/, lookbehind: !0 },
        number: { pattern: /(\s)\d+[a-z]*(?!\S)/i, lookbehind: !0 },
        variable: n,
      },
    },
    punctuation: /[{};]/,
  }
})(Prism)
Prism.languages.nim = {
  comment: { pattern: /#.*/, greedy: !0 },
  string: {
    pattern:
      /(?:\b(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")/,
    greedy: !0,
  },
  char: { pattern: /'(?:\\(?:\d+|x[\da-fA-F]{0,2}|.)|[^'])'/, greedy: !0 },
  function: {
    pattern:
      /(?:(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
    greedy: !0,
    inside: { operator: /\*$/ },
  },
  identifier: {
    pattern: /`[^`\r\n]+`/,
    greedy: !0,
    inside: { punctuation: /`/ },
  },
  number:
    /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
  keyword:
    /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
  operator: {
    pattern:
      /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|in|is|isnot|mod|not|notin|of|or|shl|shr|xor)\b)/m,
    lookbehind: !0,
  },
  punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/,
}
;(Prism.languages.nix = {
  comment: { pattern: /\/\*[\s\S]*?\*\/|#.*/, greedy: !0 },
  string: {
    pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,
        lookbehind: !0,
        inside: null,
      },
    },
  },
  url: [
    /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
    {
      pattern:
        /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
      lookbehind: !0,
    },
  ],
  antiquotation: { pattern: /\$(?=\{)/, alias: 'important' },
  number: /\b\d+\b/,
  keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
  function:
    /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
  boolean: /\b(?:false|true)\b/,
  operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
  punctuation: /[{}()[\].,:;]/,
}),
  (Prism.languages.nix.string.inside.interpolation.inside = Prism.languages.nix)
Prism.languages.nsis = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|[#;].*)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  keyword: {
    pattern:
      /(^[\t ]*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|BG(?:Font|Gradient|Image)|Banner|BrandingText|BringToFront|CRCCheck|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|Seek|Write|WriteByte|WriteUTF16LE|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DLLVersion(?:Local)?|DlgItem|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|NSISdl|Name|Nop|OutFile|PE(?:DllCharacteristics|SubsysVer)|Page(?:Callbacks)?|Pop|Push|Quit|RMDir|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|UnRegDLL|Unicode|UninstPage|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UserInfo|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|Var|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle|ns(?:Dialogs|Exec))\b/m,
    lookbehind: !0,
  },
  property:
    /\b(?:ARCHIVE|FILE_(?:ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(?:(?:CR|CU|LM)(?:32|64)?|DD|PD|U)|HKEY_(?:CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY|admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user)\b/,
  constant: /\$\{[!\w\.:\^-]+\}|\$\([!\w\.:\^-]+\)/,
  variable: /\$\w[\w\.]*/,
  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
  operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
  punctuation: /[{}[\];(),.:]/,
  important: {
    pattern:
      /(^[\t ]*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
    lookbehind: !0,
  },
}
;(Prism.languages.objectivec = Prism.languages.extend('c', {
  string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  keyword:
    /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
})),
  delete Prism.languages.objectivec['class-name'],
  (Prism.languages.objc = Prism.languages.objectivec)
Prism.languages.ocaml = {
  comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
  char: {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: !0,
  },
  string: [
    { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
    { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
  ],
  number: [
    /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
    /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
    /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
  ],
  directive: { pattern: /\B#\w+/, alias: 'property' },
  label: { pattern: /\B~\w+/, alias: 'property' },
  'type-variable': { pattern: /\B'\w+/, alias: 'function' },
  variant: { pattern: /`\w+/, alias: 'symbol' },
  keyword:
    /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  boolean: /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation',
  },
  operator:
    /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
}
!(function (E) {
  ;(E.languages.opencl = E.languages.extend('c', {
    keyword:
      /\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,
    number:
      /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,
    boolean: /\b(?:false|true)\b/,
    'constant-opencl-kernel': {
      pattern:
        /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:2|10)E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,
      alias: 'constant',
    },
  })),
    E.languages.insertBefore('opencl', 'class-name', {
      'builtin-type': {
        pattern:
          /\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|intptr_t|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|uintptr_t)\b/,
        alias: 'keyword',
      },
    })
  var _ = {
    'type-opencl-host': {
      pattern:
        /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
      alias: 'keyword',
    },
    'boolean-opencl-host': {
      pattern: /\bCL_(?:FALSE|TRUE)\b/,
      alias: 'boolean',
    },
    'constant-opencl-host': {
      pattern:
        /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
      alias: 'constant',
    },
    'function-opencl-host': {
      pattern:
        /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
      alias: 'function',
    },
  }
  E.languages.insertBefore('c', 'keyword', _),
    E.languages.cpp &&
      ((_['type-opencl-host-cpp'] = {
        pattern:
          /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|Sampler|UserEvent)\b/,
        alias: 'keyword',
      }),
      E.languages.insertBefore('cpp', 'keyword', _))
})(Prism)
Prism.languages.oz = {
  comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 },
  string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 },
  atom: { pattern: /'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, alias: 'builtin' },
  keyword:
    /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
  function: [
    /\b[a-z][A-Za-z\d]*(?=\()/,
    { pattern: /(\{)[A-Z][A-Za-z\d]*\b/, lookbehind: !0 },
  ],
  number:
    /\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,
  variable: /`(?:[^`\\]|\\.)+`/,
  'attr-name': /\b\w+(?=[ \t]*:(?![:=]))/,
  operator:
    /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
  punctuation: /[\[\](){}.:;?]/,
}
Prism.languages.parigp = {
  comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
  string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
  keyword: (function () {
    var r = [
      'breakpoint',
      'break',
      'dbg_down',
      'dbg_err',
      'dbg_up',
      'dbg_x',
      'forcomposite',
      'fordiv',
      'forell',
      'forpart',
      'forprime',
      'forstep',
      'forsubgroup',
      'forvec',
      'for',
      'iferr',
      'if',
      'local',
      'my',
      'next',
      'return',
      'until',
      'while',
    ]
    return (
      (r = r
        .map(function (r) {
          return r.split('').join(' *')
        })
        .join('|')),
      RegExp('\\b(?:' + r + ')\\b')
    )
  })(),
  function: /\b\w(?:[\w ]*\w)?(?= *\()/,
  number: {
    pattern:
      /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
    lookbehind: !0,
  },
  operator:
    /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
  punctuation: /[\[\]{}().,:;|]/,
}
!(function (e) {
  var n = (e.languages.parser = e.languages.extend('markup', {
    keyword: {
      pattern:
        /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
      lookbehind: !0,
    },
    variable: {
      pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
      lookbehind: !0,
      inside: { punctuation: /\.|:+/ },
    },
    function: {
      pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
      lookbehind: !0,
      inside: {
        keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: !0 },
        punctuation: /\.|:+/,
      },
    },
    escape: {
      pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
      alias: 'builtin',
    },
    punctuation: /[\[\](){};]/,
  }))
  ;(n = e.languages.insertBefore('parser', 'keyword', {
    'parser-comment': {
      pattern: /(\s)#.*/,
      lookbehind: !0,
      alias: 'comment',
    },
    expression: {
      pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
      greedy: !0,
      lookbehind: !0,
      inside: {
        string: {
          pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
          lookbehind: !0,
        },
        keyword: n.keyword,
        variable: n.variable,
        function: n.function,
        boolean: /\b(?:false|true)\b/,
        number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,
        escape: n.escape,
        operator:
          /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
        punctuation: n.punctuation,
      },
    },
  })),
    e.languages.insertBefore(
      'inside',
      'punctuation',
      {
        expression: n.expression,
        keyword: n.keyword,
        variable: n.variable,
        function: n.function,
        escape: n.escape,
        'parser-punctuation': {
          pattern: n.punctuation,
          alias: 'punctuation',
        },
      },
      n.tag.inside['attr-value']
    )
})(Prism)
;(Prism.languages.pascal = {
  directive: {
    pattern: /\{\$[\s\S]*?\}/,
    greedy: !0,
    alias: ['marco', 'property'],
  },
  comment: { pattern: /\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/, greedy: !0 },
  string: {
    pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
    greedy: !0,
  },
  asm: {
    pattern: /(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,
    lookbehind: !0,
    greedy: !0,
    inside: null,
  },
  keyword: [
    {
      pattern:
        /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
      lookbehind: !0,
    },
    {
      pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
      lookbehind: !0,
    },
    {
      pattern:
        /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
      lookbehind: !0,
    },
    {
      pattern:
        /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
      lookbehind: !0,
    },
  ],
  number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
  operator: [
    /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/,
    {
      pattern:
        /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
      lookbehind: !0,
    },
  ],
  punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
}),
  (Prism.languages.pascal.asm.inside = Prism.languages.extend('pascal', {
    asm: void 0,
    keyword: void 0,
    operator: void 0,
  })),
  (Prism.languages.objectpascal = Prism.languages.pascal)
!(function (e) {
  var n = '(?:\\b\\w+(?:<braces>)?|<braces>)'.replace(/<braces>/g, function () {
      return '\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\)'
    }),
    t = (e.languages.pascaligo = {
      comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
      string: {
        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
        greedy: !0,
      },
      'class-name': [
        {
          pattern: RegExp(
            '(\\btype\\s+\\w+\\s+is\\s+)<type>'.replace(/<type>/g, function () {
              return n
            }),
            'i'
          ),
          lookbehind: !0,
          inside: null,
        },
        {
          pattern: RegExp(
            '<type>(?=\\s+is\\b)'.replace(/<type>/g, function () {
              return n
            }),
            'i'
          ),
          inside: null,
        },
        {
          pattern: RegExp(
            '(:\\s*)<type>'.replace(/<type>/g, function () {
              return n
            })
          ),
          lookbehind: !0,
          inside: null,
        },
      ],
      keyword: {
        pattern:
          /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
        lookbehind: !0,
      },
      boolean: { pattern: /(^|[^&])\b(?:False|True)\b/i, lookbehind: !0 },
      builtin: {
        pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
        lookbehind: !0,
      },
      function: /\b\w+(?=\s*\()/,
      number: [
        /%[01]+|&[0-7]+|\$[a-f\d]+/i,
        /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i,
      ],
      operator:
        /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
      punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/,
    }),
    i = ['comment', 'keyword', 'builtin', 'operator', 'punctuation'].reduce(
      function (e, n) {
        return (e[n] = t[n]), e
      },
      {}
    )
  t['class-name'].forEach(function (e) {
    e.inside = i
  })
})(Prism)
;(Prism.languages.pcaxis = {
  string: /"[^"]*"/,
  keyword: {
    pattern:
      /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      keyword: /^[-A-Z\d]+/,
      language: {
        pattern: /^(\s*)\[[-\w]+\]/,
        lookbehind: !0,
        inside: { punctuation: /^\[|\]$/, property: /[-\w]+/ },
      },
      'sub-key': {
        pattern: /^(\s*)\S[\s\S]*/,
        lookbehind: !0,
        inside: {
          parameter: { pattern: /"[^"]*"/, alias: 'property' },
          punctuation: /^\(|\)$|,/,
        },
      },
    },
  },
  operator: /=/,
  tlist: {
    pattern:
      /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
    greedy: !0,
    inside: {
      function: /^TLIST/,
      property: { pattern: /^(\s*\(\s*)\w+/, lookbehind: !0 },
      string: /"[^"]*"/,
      punctuation: /[(),]/,
      operator: /-/,
    },
  },
  punctuation: /[;,]/,
  number: { pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/, lookbehind: !0 },
  boolean: /NO|YES/,
}),
  (Prism.languages.px = Prism.languages.pcaxis)
!(function (e) {
  var n =
    '(?:\\((?:[^()\\\\]|\\\\[^])*\\)|\\{(?:[^{}\\\\]|\\\\[^])*\\}|\\[(?:[^[\\]\\\\]|\\\\[^])*\\]|<(?:[^<>\\\\]|\\\\[^])*>)'
  e.languages.perl = {
    comment: [
      { pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\$])#.*/, lookbehind: !0, greedy: !0 },
    ],
    string: [
      {
        pattern: RegExp(
          '\\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\\s*(?:' +
            [
              '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1',
              '([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2',
              n,
            ].join('|') +
            ')'
        ),
        greedy: !0,
      },
      { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
      { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
    ],
    regex: [
      {
        pattern: RegExp(
          '\\b(?:m|qr)(?![a-zA-Z0-9])\\s*(?:' +
            [
              '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1',
              '([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2',
              n,
            ].join('|') +
            ')[msixpodualngc]*'
        ),
        greedy: !0,
      },
      {
        pattern: RegExp(
          '(^|[^-])\\b(?:s|tr|y)(?![a-zA-Z0-9])\\s*(?:' +
            [
              '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2(?:(?!\\2)[^\\\\]|\\\\[^])*\\2',
              '([a-zA-Z0-9])(?:(?!\\3)[^\\\\]|\\\\[^])*\\3(?:(?!\\3)[^\\\\]|\\\\[^])*\\3',
              n + '\\s*' + n,
            ].join('|') +
            ')[msixpodualngcer]*'
        ),
        lookbehind: !0,
        greedy: !0,
      },
      {
        pattern:
          /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
        greedy: !0,
      },
    ],
    variable: [
      /[&*$@%]\{\^[A-Z]+\}/,
      /[&*$@%]\^[A-Z_]/,
      /[&*$@%]#?(?=\{)/,
      /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
      /[&*$@%]\d+/,
      /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
    ],
    filehandle: { pattern: /<(?![<=])\S*?>|\b_\b/, alias: 'symbol' },
    'v-string': {
      pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
      alias: 'string',
    },
    function: { pattern: /(\bsub[ \t]+)\w+/, lookbehind: !0 },
    keyword:
      /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number:
      /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
    operator:
      /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
    punctuation: /[{}[\];(),:]/,
  }
})(Prism)
!(function (a) {
  var e = '(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+'
  ;(a.languages.phpdoc = a.languages.extend('javadoclike', {
    parameter: {
      pattern: RegExp(
        '(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:' +
          e +
          '\\s+)?)\\$\\w+'
      ),
      lookbehind: !0,
    },
  })),
    a.languages.insertBefore('phpdoc', 'keyword', {
      'class-name': [
        {
          pattern: RegExp(
            '(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)' +
              e
          ),
          lookbehind: !0,
          inside: {
            keyword:
              /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
            punctuation: /[|\\[\]()]/,
          },
        },
      ],
    }),
    a.languages.javadoclike.addSupport('php', a.languages.phpdoc)
})(Prism)
Prism.languages.insertBefore('php', 'variable', {
  this: { pattern: /\$this\b/, alias: 'keyword' },
  global:
    /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: { keyword: /\b(?:parent|self|static)\b/, punctuation: /::|\\/ },
  },
})
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: { punctuation: /^`|`$/ },
  },
  function:
    /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword:
    /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
}
;(Prism.languages.plsql = Prism.languages.extend('sql', {
  comment: { pattern: /\/\*[\s\S]*?\*\/|--.*/, greedy: !0 },
  keyword:
    /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
  operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/,
})),
  Prism.languages.insertBefore('plsql', 'operator', {
    label: { pattern: /<<\s*\w+\s*>>/, alias: 'symbol' },
  })
!(function (e) {
  var i = (e.languages.powershell = {
    comment: [
      { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
      { pattern: /(^|[^`])#.*/, lookbehind: !0 },
    ],
    string: [
      { pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null },
      { pattern: /'(?:[^']|'')*'/, greedy: !0 },
    ],
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
    ],
    keyword:
      /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern:
        /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0,
    },
    punctuation: /[|{}[\];(),.]/,
  })
  i.string[0].inside = {
    function: {
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: i,
    },
    boolean: i.boolean,
    variable: i.variable,
  }
})(Prism)
;(Prism.languages.processing = Prism.languages.extend('clike', {
  keyword:
    /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
  function: /\b\w+(?=\s*\()/,
  operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/,
})),
  Prism.languages.insertBefore('processing', 'number', {
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
      alias: 'class-name',
    },
  })
Prism.languages.prolog = {
  comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 },
  string: {
    pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
    greedy: !0,
  },
  builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
  function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
  number: /\b\d+(?:\.\d*)?/,
  operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
  punctuation: /[(){}\[\],]/,
}
Prism.languages.properties = {
  comment: /^[ \t]*[#!].*$/m,
  value: {
    pattern:
      /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
    lookbehind: !0,
    alias: 'attr-value',
  },
  key: {
    pattern: /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
    alias: 'attr-name',
  },
  punctuation: /[=:]/,
}
!(function (e) {
  var s =
    /\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/
  ;(e.languages.protobuf = e.languages.extend('clike', {
    'class-name': [
      {
        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
        lookbehind: !0,
      },
      {
        pattern:
          /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
        lookbehind: !0,
      },
    ],
    keyword:
      /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
  })),
    e.languages.insertBefore('protobuf', 'operator', {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: 'class-name',
        inside: { punctuation: /[<>.,]/, builtin: s },
      },
      builtin: s,
      'positional-class-name': {
        pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: 'class-name',
        inside: { punctuation: /\./ },
      },
      annotation: {
        pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
        lookbehind: !0,
      },
    })
})(Prism)
!(function (e) {
  e.languages.pug = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
      lookbehind: !0,
    },
    'multiline-script': {
      pattern:
        /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    filter: {
      pattern:
        /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: {
        'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
        text: /\S[\s\S]*/,
      },
    },
    'multiline-plain-text': {
      pattern:
        /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: e.languages.markup,
    },
    doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
    'flow-control': {
      pattern:
        /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
        },
        branch: {
          pattern: /^(?:case|default|else|if|unless|when|while)\b/,
          alias: 'keyword',
        },
        rest: e.languages.javascript,
      },
    },
    keyword: {
      pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
      lookbehind: !0,
    },
    mixin: [
      {
        pattern: /(^[\t ]*)mixin .+/m,
        lookbehind: !0,
        inside: {
          keyword: /^mixin/,
          function: /\w+(?=\s*\(|\s*$)/,
          punctuation: /[(),.]/,
        },
      },
      {
        pattern: /(^[\t ]*)\+.+/m,
        lookbehind: !0,
        inside: {
          name: { pattern: /^\+\w+/, alias: 'function' },
          rest: e.languages.javascript,
        },
      },
    ],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    'plain-text': {
      pattern:
        /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
      lookbehind: !0,
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [
          {
            pattern: /&[^(]+\([^)]+\)/,
            inside: e.languages.javascript,
          },
          {
            pattern: /\([^)]+\)/,
            inside: {
              'attr-value': {
                pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[!=(),]+/,
            },
          },
        ],
        punctuation: /:/,
        'attr-id': /#[\w\-]+/,
        'attr-class': /\.[\w\-]+/,
      },
    },
    code: [
      {
        pattern: /(^[\t ]*(?:-|!?=)).+/m,
        lookbehind: !0,
        inside: e.languages.javascript,
      },
    ],
    punctuation: /[.\-!=|]+/,
  }
  for (
    var t = [
        { filter: 'atpl', language: 'twig' },
        { filter: 'coffee', language: 'coffeescript' },
        'ejs',
        'handlebars',
        'less',
        'livescript',
        'markdown',
        { filter: 'sass', language: 'scss' },
        'stylus',
      ],
      n = {},
      a = 0,
      i = t.length;
    a < i;
    a++
  ) {
    var r = t[a]
    ;(r = 'string' == typeof r ? { filter: r, language: r } : r),
      e.languages[r.language] &&
        (n['filter-' + r.filter] = {
          pattern: RegExp(
            '(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+'.replace(
              '<filter_name>',
              function () {
                return r.filter
              }
            ),
            'm'
          ),
          lookbehind: !0,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable',
            },
            text: {
              pattern: /\S[\s\S]*/,
              alias: [r.language, 'language-' + r.language],
              inside: e.languages[r.language],
            },
          },
        })
  }
  e.languages.insertBefore('pug', 'filter', n)
})(Prism)
!(function (e) {
  e.languages.puppet = {
    heredoc: [
      {
        pattern:
          /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
        lookbehind: !0,
        alias: 'string',
        inside: { punctuation: /(?=\S).*\S(?= *$)/ },
      },
      {
        pattern:
          /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
        lookbehind: !0,
        greedy: !0,
        alias: 'string',
        inside: { punctuation: /(?=\S).*\S(?= *$)/ },
      },
      {
        pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
        alias: 'string',
        inside: {
          punctuation: { pattern: /(\().+?(?=\))/, lookbehind: !0 },
        },
      },
    ],
    'multiline-comment': {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: !0,
      greedy: !0,
      alias: 'comment',
    },
    regex: {
      pattern:
        /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        'extended-regex': {
          pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
          inside: { comment: /#.*/ },
        },
      },
    },
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    string: {
      pattern:
        /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
      greedy: !0,
      inside: { 'double-quoted': { pattern: /^"[\s\S]*"$/, inside: {} } },
    },
    variable: {
      pattern: /\$(?:::)?\w+(?:::\w+)*/,
      inside: { punctuation: /::/ },
    },
    'attr-name': /(?:\b\w+|\*)(?=\s*=>)/,
    function: [
      { pattern: /(\.)(?!\d)\w+/, lookbehind: !0 },
      /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/,
    ],
    number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
    boolean: /\b(?:false|true)\b/,
    keyword:
      /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
    datatype: {
      pattern:
        /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
      alias: 'symbol',
    },
    operator:
      /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
    punctuation: /[\[\]{}().,;]|:+/,
  }
  var n = [
    {
      pattern:
        /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
      lookbehind: !0,
      inside: {
        'short-variable': {
          pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
          lookbehind: !0,
          alias: 'variable',
          inside: { punctuation: /::/ },
        },
        delimiter: { pattern: /^\$/, alias: 'variable' },
        rest: e.languages.puppet,
      },
    },
    {
      pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
      lookbehind: !0,
      alias: 'variable',
      inside: { punctuation: /::/ },
    },
  ]
  ;(e.languages.puppet.heredoc[0].inside.interpolation = n),
    (e.languages.puppet.string.inside['double-quoted'].inside.interpolation = n)
})(Prism)
!(function (e) {
  ;(e.languages.pure = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
      /#!.+/,
    ],
    'inline-lang': {
      pattern: /%<[\s\S]+?%>/,
      greedy: !0,
      inside: {
        lang: {
          pattern: /(^%< *)-\*-.+?-\*-/,
          lookbehind: !0,
          alias: 'comment',
        },
        delimiter: { pattern: /^%<.*|%>$/, alias: 'punctuation' },
      },
    },
    string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
    number: {
      pattern:
        /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?L?)/i,
      lookbehind: !0,
    },
    keyword:
      /\b(?:NULL|ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
    function:
      /\b(?:abs|add_(?:addr|constdef|(?:fundef|interface|macdef|typedef)(?:_at)?|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_c?string(?:_pointer)?|byte_(?:matrix|pointer)|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|sentry|short|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
    special: { pattern: /\b__[a-z]+__\b/i, alias: 'builtin' },
    operator:
      /(?:[!"#$%&'*+,\-.\/:<=>?@\\^`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]|\b_+\b)+|\b(?:and|div|mod|not|or)\b/,
    punctuation: /[(){}\[\];,|]/,
  }),
    ['c', { lang: 'c++', alias: 'cpp' }, 'fortran'].forEach(function (t) {
      var a = t
      if (
        ('string' != typeof t && ((a = t.alias), (t = t.lang)), e.languages[a])
      ) {
        var r = {}
        ;(r['inline-lang-' + a] = {
          pattern: RegExp(
            '%< *-\\*- *<lang>\\d* *-\\*-[^]+?%>'.replace(
              '<lang>',
              t.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')
            ),
            'i'
          ),
          inside: e.util.clone(e.languages.pure['inline-lang'].inside),
        }),
          (r['inline-lang-' + a].inside.rest = e.util.clone(e.languages[a])),
          e.languages.insertBefore('pure', 'inline-lang', r)
      }
    }),
    e.languages.c &&
      (e.languages.pure['inline-lang'].inside.rest = e.util.clone(
        e.languages.c
      ))
})(Prism)
;(Prism.languages.python = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
  'string-interpolation': {
    pattern:
      /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern:
          /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0,
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation',
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: 'string',
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ['annotation', 'punctuation'],
    inside: { punctuation: /\./ },
  },
  keyword:
    /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin:
    /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number:
    /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.python[
    'string-interpolation'
  ].inside.interpolation.inside.rest = Prism.languages.python),
  (Prism.languages.py = Prism.languages.python)
Prism.languages.q = {
  string: /"(?:\\.|[^"\\\r\n])*"/,
  comment: [
    { pattern: /([\t )\]}])\/.*/, lookbehind: !0, greedy: !0 },
    {
      pattern:
        /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r(?!\n)))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
      lookbehind: !0,
      greedy: !0,
    },
    { pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m, greedy: !0 },
    { pattern: /^#!.+/m, greedy: !0 },
  ],
  symbol: /`(?::\S+|[\w.]*)/,
  datetime: {
    pattern:
      /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
    alias: 'number',
  },
  number:
    /\b(?![01]:)(?:0N[hje]?|0W[hj]?|0[wn]|0x[\da-fA-F]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?[hjfeb]?)/,
  keyword:
    /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
  adverb: { pattern: /['\/\\]:?|\beach\b/, alias: 'function' },
  verb: {
    pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?~=|$&#@^]):?|\b_\b:?/,
    alias: 'operator',
  },
  punctuation: /[(){}\[\];.]/,
}
!(function (e) {
  for (
    var r =
        '(?:[^\\\\()[\\]{}"\'/]|<string>|/(?![*/])|<comment>|\\(<expr>*\\)|\\[<expr>*\\]|\\{<expr>*\\}|\\\\[^])'
          .replace(/<string>/g, function () {
            return '"(?:\\\\.|[^\\\\"\r\n])*"|\'(?:\\\\.|[^\\\\\'\r\n])*\''
          })
          .replace(/<comment>/g, function () {
            return '//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/'
          }),
      t = 0;
    t < 2;
    t++
  )
    r = r.replace(/<expr>/g, function () {
      return r
    })
  ;(r = r.replace(/<expr>/g, '[^\\s\\S]')),
    (e.languages.qml = {
      comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 },
      'javascript-function': {
        pattern: RegExp(
          '((?:^|;)[ \t]*)function\\s+(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*\\s*\\(<js>*\\)\\s*\\{<js>*\\}'.replace(
            /<js>/g,
            function () {
              return r
            }
          ),
          'm'
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'language-javascript',
        inside: e.languages.javascript,
      },
      'class-name': {
        pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
        lookbehind: !0,
      },
      property: [
        {
          pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: !0,
        },
        {
          pattern:
            /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: !0,
          inside: { keyword: /^property/, property: /\w+(?:\.\w+)*/ },
        },
      ],
      'javascript-expression': {
        pattern: RegExp(
          '(:[ \t]*)(?![\\s;}[])(?:(?!$|[;}])<js>)+'.replace(
            /<js>/g,
            function () {
              return r
            }
          ),
          'm'
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'language-javascript',
        inside: e.languages.javascript,
      },
      string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
      keyword: /\b(?:as|import|on)\b/,
      punctuation: /[{}[\]:;,]/,
    })
})(Prism)
Prism.languages.qore = Prism.languages.extend('clike', {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
    lookbehind: !0,
  },
  string: { pattern: /("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
  keyword:
    /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
  boolean: /\b(?:false|true)\b/i,
  function: /\$?\b(?!\d)\w+(?=\()/,
  number:
    /\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,
  operator: {
    pattern:
      /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
    lookbehind: !0,
  },
  variable: /\$(?!\d)\w+\b/,
})
Prism.languages.r = {
  comment: /#.*/,
  string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  'percent-operator': { pattern: /%[^%\s]*%/, alias: 'operator' },
  boolean: /\b(?:FALSE|TRUE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [
    /\b(?:Inf|NaN)\b/,
    /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
  ],
  keyword:
    /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
  operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
  punctuation: /[(){}\[\],;]/,
}
!(function (t) {
  var n = t.util.clone(t.languages.javascript),
    e = '(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})'
  function a(t, n) {
    return (
      (t = t
        .replace(/<S>/g, function () {
          return '(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)'
        })
        .replace(/<BRACES>/g, function () {
          return '(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})'
        })
        .replace(/<SPREAD>/g, function () {
          return e
        })),
      RegExp(t, n)
    )
  }
  ;(e = a(e).source),
    (t.languages.jsx = t.languages.extend('markup', n)),
    (t.languages.jsx.tag.pattern = a(
      '</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|\'(?:\\\\[^]|[^\\\\\'])*\'|[^\\s{\'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>'
    )),
    (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
    (t.languages.jsx.tag.inside['attr-value'].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
    (t.languages.jsx.tag.inside.tag.inside['class-name'] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (t.languages.jsx.tag.inside.comment = n.comment),
    t.languages.insertBefore(
      'inside',
      'attr-name',
      { spread: { pattern: a('<SPREAD>'), inside: t.languages.jsx } },
      t.languages.jsx.tag
    ),
    t.languages.insertBefore(
      'inside',
      'special-attr',
      {
        script: {
          pattern: a('=<BRACES>'),
          alias: 'language-javascript',
          inside: {
            'script-punctuation': {
              pattern: /^=(?=\{)/,
              alias: 'punctuation',
            },
            rest: t.languages.jsx,
          },
        },
      },
      t.languages.jsx.tag
    )
  var s = function (t) {
      return t
        ? 'string' == typeof t
          ? t
          : 'string' == typeof t.content
          ? t.content
          : t.content.map(s).join('')
        : ''
    },
    g = function (n) {
      for (var e = [], a = 0; a < n.length; a++) {
        var o = n[a],
          i = !1
        if (
          ('string' != typeof o &&
            ('tag' === o.type && o.content[0] && 'tag' === o.content[0].type
              ? '</' === o.content[0].content[0].content
                ? e.length > 0 &&
                  e[e.length - 1].tagName === s(o.content[0].content[1]) &&
                  e.pop()
                : '/>' === o.content[o.content.length - 1].content ||
                  e.push({
                    tagName: s(o.content[0].content[1]),
                    openedBraces: 0,
                  })
              : e.length > 0 && 'punctuation' === o.type && '{' === o.content
              ? e[e.length - 1].openedBraces++
              : e.length > 0 &&
                e[e.length - 1].openedBraces > 0 &&
                'punctuation' === o.type &&
                '}' === o.content
              ? e[e.length - 1].openedBraces--
              : (i = !0)),
          (i || 'string' == typeof o) &&
            e.length > 0 &&
            0 === e[e.length - 1].openedBraces)
        ) {
          var r = s(o)
          a < n.length - 1 &&
            ('string' == typeof n[a + 1] || 'plain-text' === n[a + 1].type) &&
            ((r += s(n[a + 1])), n.splice(a + 1, 1)),
            a > 0 &&
              ('string' == typeof n[a - 1] || 'plain-text' === n[a - 1].type) &&
              ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
            (n[a] = new t.Token('plain-text', r, null, r))
        }
        o.content && 'string' != typeof o.content && g(o.content)
      }
    }
  t.hooks.add('after-tokenize', function (t) {
    ;('jsx' !== t.language && 'tsx' !== t.language) || g(t.tokens)
  })
})(Prism)
!(function (e) {
  var a = e.util.clone(e.languages.typescript)
  ;(e.languages.tsx = e.languages.extend('jsx', a)),
    delete e.languages.tsx.parameter,
    delete e.languages.tsx['literal-property']
  var t = e.languages.tsx.tag
  ;(t.pattern = RegExp(
    '(^|[^\\w$]|(?=</))(?:' + t.pattern.source + ')',
    t.pattern.flags
  )),
    (t.lookbehind = !0)
})(Prism)
;(Prism.languages.reason = Prism.languages.extend('clike', {
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
  'class-name': /\b[A-Z]\w*/,
  keyword:
    /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  operator:
    /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
})),
  Prism.languages.insertBefore('reason', 'class-name', {
    char: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      greedy: !0,
    },
    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
    label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
  }),
  delete Prism.languages.reason.function
!(function (a) {
  var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' },
    n =
      /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
    t = '(?:[^\\\\-]|' + n.source + ')',
    s = RegExp(t + '-' + t),
    i = {
      pattern: /(<|')[^<>']+(?=[>']$)/,
      lookbehind: !0,
      alias: 'variable',
    }
  a.languages.regex = {
    'char-class': {
      pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
      lookbehind: !0,
      inside: {
        'char-class-negation': {
          pattern: /(^\[)\^/,
          lookbehind: !0,
          alias: 'operator',
        },
        'char-class-punctuation': {
          pattern: /^\[|\]$/,
          alias: 'punctuation',
        },
        range: {
          pattern: s,
          inside: {
            escape: n,
            'range-punctuation': {
              pattern: /-/,
              alias: 'operator',
            },
          },
        },
        'special-escape': e,
        'char-set': {
          pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
          alias: 'class-name',
        },
        escape: n,
      },
    },
    'special-escape': e,
    'char-set': {
      pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
      alias: 'class-name',
    },
    backreference: [
      { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
      {
        pattern: /\\k<[^<>']+>/,
        alias: 'keyword',
        inside: { 'group-name': i },
      },
    ],
    anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
    escape: n,
    group: [
      {
        pattern:
          /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
        alias: 'punctuation',
        inside: { 'group-name': i },
      },
      { pattern: /\)/, alias: 'punctuation' },
    ],
    quantifier: {
      pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
      alias: 'number',
    },
    alternation: { pattern: /\|/, alias: 'keyword' },
  }
})(Prism)
;(Prism.languages.renpy = {
  comment: { pattern: /(^|[^\\])#.+/, lookbehind: !0 },
  string: {
    pattern:
      /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\])*\2|(?:^#?(?:(?:[0-9a-fA-F]){3}|[0-9a-fA-F]{6})$)/m,
    greedy: !0,
  },
  function: /\b[a-z_]\w*(?=\()/i,
  property:
    /\b(?:Update|UpdateVersion|action|activate_sound|adv_nvl_transition|after_load_transition|align|alpha|alt|anchor|antialias|area|auto|background|bar_invert|bar_resizing|bar_vertical|black_color|bold|bottom_bar|bottom_gutter|bottom_margin|bottom_padding|box_reverse|box_wrap|can_update|caret|child|color|crop|default_afm_enable|default_afm_time|default_fullscreen|default_text_cps|developer|directory_name|drag_handle|drag_joined|drag_name|drag_raise|draggable|dragged|drop_shadow|drop_shadow_color|droppable|dropped|easein|easeout|edgescroll|end_game_transition|end_splash_transition|enter_replay_transition|enter_sound|enter_transition|enter_yesno_transition|executable_name|exit_replay_transition|exit_sound|exit_transition|exit_yesno_transition|fadein|fadeout|first_indent|first_spacing|fit_first|focus|focus_mask|font|foreground|game_main_transition|get_installed_packages|google_play_key|google_play_salt|ground|has_music|has_sound|has_voice|height|help|hinting|hover|hover_background|hover_color|hover_sound|hovered|hyperlink_functions|idle|idle_color|image_style|include_update|insensitive|insensitive_background|insensitive_color|inside|intra_transition|italic|justify|kerning|keyboard_focus|language|layer_clipping|layers|layout|left_bar|left_gutter|left_margin|left_padding|length|line_leading|line_overlap_split|line_spacing|linear|main_game_transition|main_menu_music|maximum|min_width|minimum|minwidth|modal|mouse|mousewheel|name|narrator_menu|newline_indent|nvl_adv_transition|offset|order_reverse|outlines|overlay_functions|pos|position|prefix|radius|range|rest_indent|right_bar|right_gutter|right_margin|right_padding|rotate|rotate_pad|ruby_style|sample_sound|save_directory|say_attribute_transition|screen_height|screen_width|scrollbars|selected_hover|selected_hover_color|selected_idle|selected_idle_color|selected_insensitive|show_side_image|show_two_window|side_spacing|side_xpos|side_ypos|size|size_group|slow_cps|slow_cps_multiplier|spacing|strikethrough|subpixel|text_align|text_style|text_xpos|text_y_fudge|text_ypos|thumb|thumb_offset|thumb_shadow|thumbnail_height|thumbnail_width|time|top_bar|top_gutter|top_margin|top_padding|translations|underline|unscrollable|update|value|version|version_name|version_tuple|vertical|width|window_hide_transition|window_icon|window_left_padding|window_show_transition|window_title|windows_icon|xadjustment|xalign|xanchor|xanchoraround|xaround|xcenter|xfill|xinitial|xmargin|xmaximum|xminimum|xoffset|xofsset|xpadding|xpos|xsize|xzoom|yadjustment|yalign|yanchor|yanchoraround|yaround|ycenter|yfill|yinitial|ymargin|ymaximum|yminimum|yoffset|ypadding|ypos|ysize|ysizexysize|yzoom|zoom|zorder)\b/,
  tag: /\b(?:bar|block|button|buttoscreenn|drag|draggroup|fixed|frame|grid|[hv]box|hotbar|hotspot|image|imagebutton|imagemap|input|key|label|menu|mm_menu_frame|mousearea|nvl|parallel|screen|self|side|tag|text|textbutton|timer|vbar|viewport|window)\b|\$/,
  keyword:
    /\b(?:None|add|adjustment|alignaround|allow|angle|animation|around|as|assert|behind|box_layout|break|build|cache|call|center|changed|child_size|choice|circles|class|clear|clicked|clipping|clockwise|config|contains|continue|corner1|corner2|counterclockwise|def|default|define|del|delay|disabled|disabled_text|dissolve|elif|else|event|except|exclude|exec|expression|fade|finally|for|from|function|global|gm_root|has|hide|id|if|import|in|init|is|jump|knot|lambda|left|less_rounded|mm_root|movie|music|null|on|onlayer|pass|pause|persistent|play|print|python|queue|raise|random|renpy|repeat|return|right|rounded_window|scene|scope|set|show|slow|slow_abortable|slow_done|sound|stop|store|style|style_group|substitute|suffix|theme|transform|transform_anchor|transpose|try|ui|unhovered|updater|use|voice|while|widget|widget_hover|widget_selected|widget_text|yield)\b/,
  boolean: /\b(?:[Ff]alse|[Tt]rue)\b/,
  number:
    /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
  operator:
    /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:and|at|not|or|with)\b/,
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.rpy = Prism.languages.renpy)
Prism.languages.rest = {
  table: [
    {
      pattern:
        /(^[\t ]*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/m,
      lookbehind: !0,
      inside: { punctuation: /\||(?:\+[=-]+)+\+/ },
    },
    {
      pattern:
        /(^[\t ]*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/m,
      lookbehind: !0,
      inside: { punctuation: /[=-]+/ },
    },
  ],
  'substitution-def': {
    pattern: /(^[\t ]*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
    lookbehind: !0,
    inside: {
      substitution: {
        pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
        alias: 'attr-value',
        inside: { punctuation: /^\||\|$/ },
      },
      directive: {
        pattern: /( )(?! )[^:]+::/,
        lookbehind: !0,
        alias: 'function',
        inside: { punctuation: /::$/ },
      },
    },
  },
  'link-target': [
    {
      pattern: /(^[\t ]*\.\. )\[[^\]]+\]/m,
      lookbehind: !0,
      alias: 'string',
      inside: { punctuation: /^\[|\]$/ },
    },
    {
      pattern: /(^[\t ]*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
      lookbehind: !0,
      alias: 'string',
      inside: { punctuation: /^_|:$/ },
    },
  ],
  directive: {
    pattern: /(^[\t ]*\.\. )[^:]+::/m,
    lookbehind: !0,
    alias: 'function',
    inside: { punctuation: /::$/ },
  },
  comment: {
    pattern:
      /(^[\t ]*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
    lookbehind: !0,
  },
  title: [
    {
      pattern:
        /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
      inside: {
        punctuation:
          /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
    {
      pattern:
        /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
      lookbehind: !0,
      inside: {
        punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
  ],
  hr: {
    pattern:
      /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
    lookbehind: !0,
    alias: 'punctuation',
  },
  field: {
    pattern: /(^[\t ]*):[^:\r\n]+:(?= )/m,
    lookbehind: !0,
    alias: 'attr-name',
  },
  'command-line-option': {
    pattern:
      /(^[\t ]*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
    lookbehind: !0,
    alias: 'symbol',
  },
  'literal-block': {
    pattern: /::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,
    inside: {
      'literal-block-punctuation': {
        pattern: /^::/,
        alias: 'punctuation',
      },
    },
  },
  'quoted-literal-block': {
    pattern:
      /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
    inside: {
      'literal-block-punctuation': {
        pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
        alias: 'punctuation',
      },
    },
  },
  'list-bullet': {
    pattern:
      /(^[\t ]*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
    lookbehind: !0,
    alias: 'punctuation',
  },
  'doctest-block': {
    pattern: /(^[\t ]*)>>> .+(?:(?:\r?\n|\r).+)*/m,
    lookbehind: !0,
    inside: { punctuation: /^>>>/ },
  },
  inline: [
    {
      pattern:
        /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s)(?:(?!\2).)*\S\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
      lookbehind: !0,
      inside: {
        bold: { pattern: /(^\*\*).+(?=\*\*$)/, lookbehind: !0 },
        italic: { pattern: /(^\*).+(?=\*$)/, lookbehind: !0 },
        'inline-literal': {
          pattern: /(^``).+(?=``$)/,
          lookbehind: !0,
          alias: 'symbol',
        },
        role: {
          pattern: /^:[^:]+:|:[^:]+:$/,
          alias: 'function',
          inside: { punctuation: /^:|:$/ },
        },
        'interpreted-text': {
          pattern: /(^`).+(?=`$)/,
          lookbehind: !0,
          alias: 'attr-value',
        },
        substitution: {
          pattern: /(^\|).+(?=\|$)/,
          lookbehind: !0,
          alias: 'attr-value',
        },
        punctuation: /\*\*?|``?|\|/,
      },
    },
  ],
  link: [
    {
      pattern: /\[[^\[\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
      alias: 'string',
      inside: { punctuation: /^\[|\]_$/ },
    },
    {
      pattern:
        /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
      alias: 'string',
      inside: { punctuation: /^_?`|`$|`?_?_$/ },
    },
  ],
  punctuation: {
    pattern: /(^[\t ]*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
    lookbehind: !0,
  },
}
Prism.languages.rip = {
  comment: { pattern: /#.*/, greedy: !0 },
  char: { pattern: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/, greedy: !0 },
  string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  regex: {
    pattern:
      /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,
  builtin: /@|\bSystem\b/,
  boolean: /\b(?:false|true)\b/,
  date: /\b\d{4}-\d{2}-\d{2}\b/,
  time: /\b\d{2}:\d{2}:\d{2}\b/,
  datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
  symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
  number: /[+-]?\b(?:\d+\.\d+|\d+)\b/,
  punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
  reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
}
Prism.languages.roboconf = {
  comment: /#.*/,
  keyword: {
    pattern:
      /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
    lookbehind: !0,
  },
  component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: 'variable' },
  property: /[\w.-]+(?=[ \t]*:)/,
  value: {
    pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
    lookbehind: !0,
    alias: 'attr-value',
  },
  optional: { pattern: /\(optional\)/, alias: 'builtin' },
  wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: 'operator' },
  punctuation: /[{},.;:=]/,
}
!(function (t) {
  var n = { pattern: /(^[ \t]*| {2}|\t)#.*/m, lookbehind: !0, greedy: !0 },
    e = {
      pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,
      lookbehind: !0,
      inside: { punctuation: /^[$@&%]\{|\}$/ },
    }
  function a(t, a) {
    var r = {
      'section-header': { pattern: /^ ?\*{3}.+?\*{3}/, alias: 'keyword' },
    }
    for (var o in a) r[o] = a[o]
    return (
      (r.tag = {
        pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,
        lookbehind: !0,
        inside: { punctuation: /\[|\]/ },
      }),
      (r.variable = e),
      (r.comment = n),
      {
        pattern: RegExp(
          '^ ?\\*{3}[ \t]*<name>[ \t]*\\*{3}(?:.|[\r\n](?!\\*{3}))*'.replace(
            /<name>/g,
            function () {
              return t
            }
          ),
          'im'
        ),
        alias: 'section',
        inside: r,
      }
    )
  }
  var r = {
      pattern:
        /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
      lookbehind: !0,
      alias: 'string',
    },
    o = {
      pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,
      lookbehind: !0,
      alias: 'function',
      inside: { variable: e },
    },
    i = {
      pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
      lookbehind: !0,
      inside: { variable: e },
    }
  ;(t.languages.robotframework = {
    settings: a('Settings', {
      documentation: {
        pattern:
          /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
        lookbehind: !0,
        alias: 'string',
      },
      property: {
        pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
        lookbehind: !0,
      },
    }),
    variables: a('Variables'),
    'test-cases': a('Test Cases', {
      'test-name': o,
      documentation: r,
      property: i,
    }),
    keywords: a('Keywords', {
      'keyword-name': o,
      documentation: r,
      property: i,
    }),
    tasks: a('Tasks', { 'task-name': o, documentation: r, property: i }),
    comment: n,
  }),
    (t.languages.robot = t.languages.robotframework)
})(Prism)
!(function (e) {
  for (var a = '/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/', t = 0; t < 2; t++)
    a = a.replace(/<self>/g, function () {
      return a
    })
  ;(a = a.replace(/<self>/g, function () {
    return '[^\\s\\S]'
  })),
    (e.languages.rust = {
      comment: [
        {
          pattern: RegExp('(^|[^\\\\])' + a),
          lookbehind: !0,
          greedy: !0,
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0,
      },
      char: {
        pattern:
          /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0,
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: 'attr-name',
        inside: { string: null },
      },
      'closure-params': {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'closure-punctuation': {
            pattern: /^\||\|$/,
            alias: 'punctuation',
          },
          rest: null,
        },
      },
      'lifetime-annotation': { pattern: /'\w+/, alias: 'symbol' },
      'fragment-specifier': {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: 'punctuation',
      },
      variable: /\$\w+/,
      'function-definition': {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: 'function',
      },
      'type-definition': {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: 'class-name',
      },
      'module-declaration': [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: 'namespace',
        },
        {
          pattern:
            /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: 'namespace',
          inside: { punctuation: /::/ },
        },
      ],
      keyword: [
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
      ],
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: { pattern: /\b\w+!/, alias: 'property' },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      'class-name': /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: { punctuation: /::/ },
      },
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
    }),
    (e.languages.rust['closure-params'].inside.rest = e.languages.rust),
    (e.languages.rust.attribute.inside.string = e.languages.rust.string)
})(Prism)
!(function (e) {
  var t = '(?:"(?:""|[^"])*"(?!")|\'(?:\'\'|[^\'])*\'(?!\'))',
    a = /\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    n = { pattern: RegExp(t + '[bx]'), alias: 'number' },
    i = { pattern: /&[a-z_]\w*/i },
    r = {
      pattern:
        /((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMEXIST|SYMGLOBL|SYMLOCAL|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,
      lookbehind: !0,
      alias: 'keyword',
    },
    s = {
      pattern: /(^|\s)(?:proc\s+\w+|data(?!=)|quit|run)\b/i,
      alias: 'keyword',
      lookbehind: !0,
    },
    o = [
      /\/\*[\s\S]*?\*\//,
      { pattern: /(^[ \t]*|;\s*)\*[^;]*;/m, lookbehind: !0 },
    ],
    l = { pattern: RegExp(t), greedy: !0 },
    c = /[$%@.(){}\[\];,\\]/,
    d = { pattern: /%?\b\w+(?=\()/, alias: 'keyword' },
    p = {
      function: d,
      'arg-value': { pattern: /(=\s*)[A-Z\.]+/i, lookbehind: !0 },
      operator: /=/,
      'macro-variable': i,
      arg: { pattern: /[A-Z]+/i, alias: 'keyword' },
      number: a,
      'numeric-constant': n,
      punctuation: c,
      string: l,
    },
    u = {
      pattern: /\b(?:format|put)\b=?[\w'$.]+/i,
      inside: {
        keyword: /^(?:format|put)(?==)/i,
        equals: /=/,
        format: { pattern: /(?:\w|\$\d)+\.\d?/, alias: 'number' },
      },
    },
    m = {
      pattern: /\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,
      inside: {
        keyword: /^(?:format|put)/i,
        format: { pattern: /[\w$]+\.\d?/, alias: 'number' },
      },
    },
    b = {
      pattern:
        /((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,
      lookbehind: !0,
      alias: 'keyword',
    },
    g = {
      pattern: /(^|\s)(?:submit(?:\s+(?:load|norun|parseonly))?|endsubmit)\b/i,
      lookbehind: !0,
      alias: 'keyword',
    },
    k =
      'aStore|accessControl|aggregation|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|cdm|clustering|conditionalRandomFields|configuration|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deduplication|deepLearn|deepNeural|deepRnn|ds2|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gVarCluster|gam|gleam|graphSemiSupLearn|hiddenMarkovModel|hyperGroup|ica|image|iml|kernalPca|langModel|ldaTopic|loadStreams|mbc|mixed|mlTools|modelPublishing|network|neuralNet|nmf|nonParametricBayes|nonlinear|optNetwork|optimization|panel|pca|percentile|phreg|pls|qkb|qlim|quantreg|recommend|regression|reinforcementLearn|robustPca|ruleMining|sampling|sandwich|sccasl|search(?:Analytics)?|sentimentAnalysis|sequence|session(?:Prop)?|severity|simSystem|simple|smartData|sparkEmbeddedProcess|sparseML|spatialreg|spc|stabilityMonitoring|svDataDescription|svm|table|text(?:Filters|Frequency|Mining|Parse|Rule(?:Develop|Score)|Topic|Util)|timeData|transpose|tsInfo|tsReconcile|uniTimeSeries|varReduce',
    y = {
      pattern: RegExp(
        '(^|\\s)(?:action\\s+)?(?:<act>)\\.[a-z]+\\b[^;]+'.replace(
          /<act>/g,
          function () {
            return k
          }
        ),
        'i'
      ),
      lookbehind: !0,
      inside: {
        keyword: RegExp(
          '(?:<act>)\\.[a-z]+\\b'.replace(/<act>/g, function () {
            return k
          }),
          'i'
        ),
        action: { pattern: /(?:action)/i, alias: 'keyword' },
        comment: o,
        function: d,
        'arg-value': p['arg-value'],
        operator: p.operator,
        argument: p.arg,
        number: a,
        'numeric-constant': n,
        punctuation: c,
        string: l,
      },
    },
    S = {
      pattern:
        /((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|else|end(?:comp|source)?|entryTitle|eval(?:uate)?|exec(?:ute)?|exit|file(?:name)?|fill(?:attrs)?|flist|fnc|function(?:list)?|global|goto|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|_?null_|name|noobs|nowd|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|print|put|raise|ranexp|rannor|rbreak|retain|return|select|session|sessref|set|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|y2axisopts|yaxisopts)\b/i,
      lookbehind: !0,
    }
  e.languages.sas = {
    datalines: {
      pattern: /^([ \t]*)(?:cards|(?:data)?lines);[\s\S]+?^[ \t]*;/im,
      lookbehind: !0,
      alias: 'string',
      inside: {
        keyword: { pattern: /^(?:cards|(?:data)?lines)/i },
        punctuation: /;/,
      },
    },
    'proc-sql': {
      pattern:
        /(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        sql: {
          pattern: RegExp(
            '^[ \t]*(?:select|alter\\s+table|(?:create|describe|drop)\\s+(?:index|table(?:\\s+constraints)?|view)|create\\s+unique\\s+index|insert\\s+into|update)(?:<str>|[^;"\'])+;'.replace(
              /<str>/g,
              function () {
                return t
              }
            ),
            'im'
          ),
          alias: 'language-sql',
          inside: e.languages.sql,
        },
        'global-statements': b,
        'sql-statements': {
          pattern:
            /(^|\s)(?:disconnect\s+from|begin|commit|exec(?:ute)?|reset|rollback|validate)\b/i,
          lookbehind: !0,
          alias: 'keyword',
        },
        number: a,
        'numeric-constant': n,
        punctuation: c,
        string: l,
      },
    },
    'proc-groovy': {
      pattern:
        /(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        groovy: {
          pattern: RegExp(
            '(^[ \t]*submit(?:\\s+(?:load|norun|parseonly))?)(?:<str>|[^"\'])+?(?=endsubmit;)'.replace(
              /<str>/g,
              function () {
                return t
              }
            ),
            'im'
          ),
          lookbehind: !0,
          alias: 'language-groovy',
          inside: e.languages.groovy,
        },
        keyword: S,
        'submit-statement': g,
        'global-statements': b,
        number: a,
        'numeric-constant': n,
        punctuation: c,
        string: l,
      },
    },
    'proc-lua': {
      pattern:
        /(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        lua: {
          pattern: RegExp(
            '(^[ \t]*submit(?:\\s+(?:load|norun|parseonly))?)(?:<str>|[^"\'])+?(?=endsubmit;)'.replace(
              /<str>/g,
              function () {
                return t
              }
            ),
            'im'
          ),
          lookbehind: !0,
          alias: 'language-lua',
          inside: e.languages.lua,
        },
        keyword: S,
        'submit-statement': g,
        'global-statements': b,
        number: a,
        'numeric-constant': n,
        punctuation: c,
        string: l,
      },
    },
    'proc-cas': {
      pattern:
        /(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        'statement-var': {
          pattern: /((?:^|\s)=?)saveresult\s[^;]+/im,
          lookbehind: !0,
          inside: {
            statement: {
              pattern: /^saveresult\s+\S+/i,
              inside: { keyword: /^(?:saveresult)/i },
            },
            rest: p,
          },
        },
        'cas-actions': y,
        statement: {
          pattern: /((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,
          lookbehind: !0,
          inside: p,
        },
        step: s,
        keyword: S,
        function: d,
        format: u,
        altformat: m,
        'global-statements': b,
        number: a,
        'numeric-constant': n,
        punctuation: c,
        string: l,
      },
    },
    'proc-args': {
      pattern: RegExp(
        '(^proc\\s+\\w+\\s+)(?!\\s)(?:[^;"\']|<str>)+;'.replace(
          /<str>/g,
          function () {
            return t
          }
        ),
        'im'
      ),
      lookbehind: !0,
      inside: p,
    },
    'macro-keyword': r,
    'macro-variable': i,
    'macro-string-functions': {
      pattern:
        /((?:^|\s|=))%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)\(.*?(?:[^%]\))/i,
      lookbehind: !0,
      inside: {
        function: {
          pattern: /%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)/i,
          alias: 'keyword',
        },
        'macro-keyword': r,
        'macro-variable': i,
        'escaped-char': { pattern: /%['"()<>=¬^~;,#]/ },
        punctuation: c,
      },
    },
    'macro-declaration': {
      pattern: /^%macro[^;]+(?=;)/im,
      inside: { keyword: /%macro/i },
    },
    'macro-end': {
      pattern: /^%mend[^;]+(?=;)/im,
      inside: { keyword: /%mend/i },
    },
    macro: { pattern: /%_\w+(?=\()/, alias: 'keyword' },
    input: {
      pattern: /\binput\s[-\w\s/*.$&]+;/i,
      inside: {
        input: { alias: 'keyword', pattern: /^input/i },
        comment: o,
        number: a,
        'numeric-constant': n,
      },
    },
    'options-args': {
      pattern: /(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,
      lookbehind: !0,
      inside: p,
    },
    'cas-actions': y,
    comment: o,
    function: d,
    format: u,
    altformat: m,
    'numeric-constant': n,
    datetime: { pattern: RegExp(t + '(?:dt?|t)'), alias: 'number' },
    string: l,
    step: s,
    keyword: S,
    'operator-keyword': {
      pattern: /\b(?:eq|ge|gt|in|le|lt|ne|not)\b/i,
      alias: 'operator',
    },
    number: a,
    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/,
    punctuation: c,
  }
})(Prism)
!(function (e) {
  ;(e.languages.sass = e.languages.extend('css', {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0,
    },
  })),
    e.languages.insertBefore('sass', 'atrule', {
      'atrule-line': {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: { atrule: /(?:@[\w-]+|[+=])/ },
      },
    }),
    delete e.languages.sass.atrule
  var r = /\$[-\w]+|#\{\$[-\w]+\}/,
    t = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
    ]
  e.languages.insertBefore('sass', 'property', {
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: { punctuation: /:/, variable: r, operator: t },
    },
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: r,
        operator: t,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern:
          /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0,
      },
    })
})(Prism)
;(Prism.languages.scss = Prism.languages.extend('css', {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0,
  },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: { pattern: /&/, alias: 'important' },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
  },
})),
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
      { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
    ],
  }),
  Prism.languages.insertBefore('scss', 'important', {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/,
  }),
  Prism.languages.insertBefore('scss', 'function', {
    'module-modifier': {
      pattern: /\b(?:as|hide|show|with)\b/i,
      alias: 'keyword',
    },
    placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
    statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
      lookbehind: !0,
    },
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss)
;(Prism.languages.scala = Prism.languages.extend('java', {
  'triple-quoted-string': {
    pattern: /"""[\s\S]*?"""/,
    greedy: !0,
    alias: 'string',
  },
  string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  keyword:
    /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
  number:
    /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
  builtin:
    /\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,
  symbol: /'[^\d\s\\]\w*/,
})),
  Prism.languages.insertBefore('scala', 'triple-quoted-string', {
    'string-interpolation': {
      pattern:
        /\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,
      greedy: !0,
      inside: {
        id: { pattern: /^\w+/, greedy: !0, alias: 'function' },
        escape: {
          pattern: /\\\$"|\$[$"]/,
          greedy: !0,
          alias: 'symbol',
        },
        interpolation: {
          pattern: /\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
          greedy: !0,
          inside: {
            punctuation: /^\$\{?|\}$/,
            expression: {
              pattern: /[\s\S]+/,
              inside: Prism.languages.scala,
            },
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  delete Prism.languages.scala['class-name'],
  delete Prism.languages.scala.function
!(function (s) {
  var n = [
    '"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',
    "'[^']*'",
    "\\$'(?:[^'\\\\]|\\\\[^])*'",
    '<<-?\\s*(["\']?)(\\w+)\\1\\s[^]*?[\r\n]\\2',
  ].join('|')
  ;(s.languages['shell-session'] = {
    command: {
      pattern: RegExp(
        '^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' +
          "(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(
            /<<str>>/g,
            function () {
              return n
            }
          ),
        'm'
      ),
      greedy: !0,
      inside: {
        info: {
          pattern: /^[^#$%]+/,
          alias: 'punctuation',
          inside: {
            user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
            punctuation: /:/,
            path: /[\s\S]+/,
          },
        },
        bash: {
          pattern: /(^[$#%]\s*)\S[\s\S]*/,
          lookbehind: !0,
          alias: 'language-bash',
          inside: s.languages.bash,
        },
        'shell-symbol': { pattern: /^[$#%]/, alias: 'important' },
      },
    },
    output: /.(?:.*(?:[\r\n]|.$))*/,
  }),
    (s.languages['sh-session'] = s.languages.shellsession =
      s.languages['shell-session'])
})(Prism)
Prism.languages.smalltalk = {
  comment: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
  char: { pattern: /\$./, greedy: !0 },
  string: { pattern: /'(?:''|[^'])*'/, greedy: !0 },
  symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
  'block-arguments': {
    pattern: /(\[\s*):[^\[|]*\|/,
    lookbehind: !0,
    inside: { variable: /:[\da-z]+/i, punctuation: /\|/ },
  },
  'temporary-variables': {
    pattern: /\|[^|]+\|/,
    inside: { variable: /[\da-z]+/i, punctuation: /\|/ },
  },
  keyword: /\b(?:new|nil|self|super)\b/,
  boolean: /\b(?:false|true)\b/,
  number: [
    /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
    /\b\d+(?:\.\d+)?(?:e-?\d+)?/,
  ],
  operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
  punctuation: /[.;:?\[\](){}]/,
}
!(function (e) {
  ;(e.languages.smarty = {
    comment: { pattern: /^\{\*[\s\S]*?\*\}/, greedy: !0 },
    'embedded-php': {
      pattern: /^\{php\}[\s\S]*?\{\/php\}/,
      greedy: !0,
      inside: {
        smarty: { pattern: /^\{php\}|\{\/php\}$/, inside: null },
        php: {
          pattern: /[\s\S]+/,
          alias: 'language-php',
          inside: e.languages.php,
        },
      },
    },
    string: [
      {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /\{[^{}]*\}|`[^`]*`/,
            inside: {
              'interpolation-punctuation': {
                pattern: /^[{`]|[`}]$/,
                alias: 'punctuation',
              },
              expression: { pattern: /[\s\S]+/, inside: null },
            },
          },
          variable: /\$\w+/,
        },
      },
      { pattern: /'(?:\\.|[^'\\\r\n])*'/, greedy: !0 },
    ],
    keyword: {
      pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
      lookbehind: !0,
      greedy: !0,
    },
    delimiter: { pattern: /^\{\/?|\}$/, greedy: !0, alias: 'punctuation' },
    number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
    variable: [
      /\$(?!\d)\w+/,
      /#(?!\d)\w+#/,
      { pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/, lookbehind: !0 },
      { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 },
    ],
    function: {
      pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
      lookbehind: !0,
    },
    'attr-name': /\b[a-z_]\w*(?=\s*=)/i,
    boolean: /\b(?:false|no|off|on|true|yes)\b/,
    punctuation: /[\[\](){}.,:`]|->/,
    operator: [
      /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
      /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
      /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/,
    ],
  }),
    (e.languages.smarty['embedded-php'].inside.smarty.inside =
      e.languages.smarty),
    (e.languages.smarty.string[0].inside.interpolation.inside.expression.inside =
      e.languages.smarty)
  var n = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
    t = RegExp(
      '\\{\\*[^]*?\\*\\}|\\{php\\}[^]*?\\{/php\\}|' +
        '\\{(?:[^{}"\']|<str>|\\{(?:[^{}"\']|<str>|\\{(?:[^{}"\']|<str>)*\\})*\\})*\\}'.replace(
          /<str>/g,
          function () {
            return n.source
          }
        ),
      'g'
    )
  e.hooks.add('before-tokenize', function (n) {
    var a = !1
    e.languages['markup-templating'].buildPlaceholders(
      n,
      'smarty',
      t,
      function (e) {
        return (
          '{/literal}' === e && (a = !1),
          !a && ('{literal}' === e && (a = !0), !0)
        )
      }
    )
  }),
    e.hooks.add('after-tokenize', function (n) {
      e.languages['markup-templating'].tokenizePlaceholders(n, 'smarty')
    })
})(Prism)
;(Prism.languages.solidity = Prism.languages.extend('clike', {
  'class-name': {
    pattern:
      /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
  operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/,
})),
  Prism.languages.insertBefore('solidity', 'keyword', {
    builtin:
      /\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/,
  }),
  Prism.languages.insertBefore('solidity', 'number', {
    version: {
      pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
      lookbehind: !0,
      alias: 'number',
    },
  }),
  (Prism.languages.sol = Prism.languages.solidity)
!(function (e) {
  var a = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    t = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/
  ;(e.languages.soy = {
    comment: [
      /\/\*[\s\S]*?\*\//,
      { pattern: /(\s)\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    'command-arg': {
      pattern:
        /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
      lookbehind: !0,
      alias: 'string',
      inside: { punctuation: /\./ },
    },
    parameter: {
      pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
      lookbehind: !0,
      alias: 'variable',
    },
    keyword: [
      {
        pattern:
          /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
        lookbehind: !0,
      },
      /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/,
    ],
    delimiter: { pattern: /^\{+\/?|\/?\}+$/, alias: 'punctuation' },
    property: /\w+(?==)/,
    variable: {
      pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
      inside: {
        string: { pattern: a, greedy: !0 },
        number: t,
        punctuation: /[\[\].?]/,
      },
    },
    string: { pattern: a, greedy: !0 },
    function: [/\w+(?=\()/, { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: !0 }],
    boolean: /\b(?:false|true)\b/,
    number: t,
    operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
    punctuation: /[{}()\[\]|.,:]/,
  }),
    e.hooks.add('before-tokenize', function (a) {
      var t = !1
      e.languages['markup-templating'].buildPlaceholders(
        a,
        'soy',
        /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g,
        function (e) {
          return (
            '{/literal}' === e && (t = !1),
            !t && ('{literal}' === e && (t = !0), !0)
          )
        }
      )
    }),
    e.hooks.add('after-tokenize', function (a) {
      e.languages['markup-templating'].tokenizePlaceholders(a, 'soy')
    })
})(Prism)
;(Prism.languages.turtle = {
  comment: { pattern: /#.*/, greedy: !0 },
  'multiline-string': {
    pattern:
      /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
    greedy: !0,
    alias: 'string',
    inside: { comment: /#.*/ },
  },
  string: {
    pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
    greedy: !0,
  },
  url: {
    pattern:
      /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
    greedy: !0,
    inside: { punctuation: /[<>]/ },
  },
  function: {
    pattern:
      /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
    inside: {
      'local-name': { pattern: /([^:]*:)[\s\S]+/, lookbehind: !0 },
      prefix: { pattern: /[\s\S]+/, inside: { punctuation: /:/ } },
    },
  },
  number: /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
  punctuation: /[{}.,;()[\]]|\^\^/,
  boolean: /\b(?:false|true)\b/,
  keyword: [/(?:\ba|@prefix|@base)\b|=/, /\b(?:base|graph|prefix)\b/i],
  tag: { pattern: /@[a-z]+(?:-[a-z\d]+)*/i, inside: { punctuation: /@/ } },
}),
  (Prism.languages.trig = Prism.languages.turtle)
;(Prism.languages.sparql = Prism.languages.extend('turtle', {
  boolean: /\b(?:false|true)\b/i,
  variable: { pattern: /[?$]\w+/, greedy: !0 },
})),
  Prism.languages.insertBefore('sparql', 'punctuation', {
    keyword: [
      /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
      /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
      /\b(?:BASE|GRAPH|PREFIX)\b/i,
    ],
  }),
  (Prism.languages.rq = Prism.languages.sparql)
Prism.languages['splunk-spl'] = {
  comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
  string: { pattern: /"(?:\\.|[^\\"])*"/, greedy: !0 },
  keyword:
    /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
  'operator-word': {
    pattern: /\b(?:and|as|by|not|or|xor)\b/i,
    alias: 'operator',
  },
  function: /\b\w+(?=\s*\()/,
  property: /\b\w+(?=\s*=(?!=))/,
  date: {
    pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
    alias: 'number',
  },
  number: /\b\d+(?:\.\d+)?\b/,
  boolean: /\b(?:f|false|t|true)\b/i,
  operator: /[<>=]=?|[-+*/%|]/,
  punctuation: /[()[\],]/,
}
;(Prism.languages.sqf = Prism.languages.extend('clike', {
  string: { pattern: /"(?:(?:"")?[^"])*"(?!")|'(?:[^'])*'/, greedy: !0 },
  keyword:
    /\b(?:breakOut|breakTo|call|case|catch|default|do|echo|else|execFSM|execVM|exitWith|for|forEach|forEachMember|forEachMemberAgent|forEachMemberTeam|from|goto|if|nil|preprocessFile|preprocessFileLineNumbers|private|scopeName|spawn|step|switch|then|throw|to|try|while|with)\b/i,
  boolean: /\b(?:false|true)\b/i,
  function:
    /\b(?:abs|accTime|acos|action|actionIDs|actionKeys|actionKeysImages|actionKeysNames|actionKeysNamesArray|actionName|actionParams|activateAddons|activatedAddons|activateKey|add3DENConnection|add3DENEventHandler|add3DENLayer|addAction|addBackpack|addBackpackCargo|addBackpackCargoGlobal|addBackpackGlobal|addCamShake|addCuratorAddons|addCuratorCameraArea|addCuratorEditableObjects|addCuratorEditingArea|addCuratorPoints|addEditorObject|addEventHandler|addForce|addForceGeneratorRTD|addGoggles|addGroupIcon|addHandgunItem|addHeadgear|addItem|addItemCargo|addItemCargoGlobal|addItemPool|addItemToBackpack|addItemToUniform|addItemToVest|addLiveStats|addMagazine|addMagazineAmmoCargo|addMagazineCargo|addMagazineCargoGlobal|addMagazineGlobal|addMagazinePool|addMagazines|addMagazineTurret|addMenu|addMenuItem|addMissionEventHandler|addMPEventHandler|addMusicEventHandler|addOwnedMine|addPlayerScores|addPrimaryWeaponItem|addPublicVariableEventHandler|addRating|addResources|addScore|addScoreSide|addSecondaryWeaponItem|addSwitchableUnit|addTeamMember|addToRemainsCollector|addTorque|addUniform|addVehicle|addVest|addWaypoint|addWeapon|addWeaponCargo|addWeaponCargoGlobal|addWeaponGlobal|addWeaponItem|addWeaponPool|addWeaponTurret|admin|agent|agents|AGLToASL|aimedAtTarget|aimPos|airDensityCurveRTD|airDensityRTD|airplaneThrottle|airportSide|AISFinishHeal|alive|all3DENEntities|allAirports|allControls|allCurators|allCutLayers|allDead|allDeadMen|allDisplays|allGroups|allMapMarkers|allMines|allMissionObjects|allow3DMode|allowCrewInImmobile|allowCuratorLogicIgnoreAreas|allowDamage|allowDammage|allowFileOperations|allowFleeing|allowGetIn|allowSprint|allPlayers|allSimpleObjects|allSites|allTurrets|allUnits|allUnitsUAV|allVariables|ammo|ammoOnPylon|animate|animateBay|animateDoor|animatePylon|animateSource|animationNames|animationPhase|animationSourcePhase|animationState|append|apply|armoryPoints|arrayIntersect|asin|ASLToAGL|ASLToATL|assert|assignAsCargo|assignAsCargoIndex|assignAsCommander|assignAsDriver|assignAsGunner|assignAsTurret|assignCurator|assignedCargo|assignedCommander|assignedDriver|assignedGunner|assignedItems|assignedTarget|assignedTeam|assignedVehicle|assignedVehicleRole|assignItem|assignTeam|assignToAirport|atan|atan2|atg|ATLToASL|attachedObject|attachedObjects|attachedTo|attachObject|attachTo|attackEnabled|backpack|backpackCargo|backpackContainer|backpackItems|backpackMagazines|backpackSpaceFor|behaviour|benchmark|binocular|blufor|boundingBox|boundingBoxReal|boundingCenter|briefingName|buildingExit|buildingPos|buldozer_EnableRoadDiag|buldozer_IsEnabledRoadDiag|buldozer_LoadNewRoads|buldozer_reloadOperMap|buttonAction|buttonSetAction|cadetMode|callExtension|camCommand|camCommit|camCommitPrepared|camCommitted|camConstuctionSetParams|camCreate|camDestroy|cameraEffect|cameraEffectEnableHUD|cameraInterest|cameraOn|cameraView|campaignConfigFile|camPreload|camPreloaded|camPrepareBank|camPrepareDir|camPrepareDive|camPrepareFocus|camPrepareFov|camPrepareFovRange|camPreparePos|camPrepareRelPos|camPrepareTarget|camSetBank|camSetDir|camSetDive|camSetFocus|camSetFov|camSetFovRange|camSetPos|camSetRelPos|camSetTarget|camTarget|camUseNVG|canAdd|canAddItemToBackpack|canAddItemToUniform|canAddItemToVest|cancelSimpleTaskDestination|canFire|canMove|canSlingLoad|canStand|canSuspend|canTriggerDynamicSimulation|canUnloadInCombat|canVehicleCargo|captive|captiveNum|cbChecked|cbSetChecked|ceil|channelEnabled|cheatsEnabled|checkAIFeature|checkVisibility|civilian|className|clear3DENAttribute|clear3DENInventory|clearAllItemsFromBackpack|clearBackpackCargo|clearBackpackCargoGlobal|clearForcesRTD|clearGroupIcons|clearItemCargo|clearItemCargoGlobal|clearItemPool|clearMagazineCargo|clearMagazineCargoGlobal|clearMagazinePool|clearOverlay|clearRadio|clearVehicleInit|clearWeaponCargo|clearWeaponCargoGlobal|clearWeaponPool|clientOwner|closeDialog|closeDisplay|closeOverlay|collapseObjectTree|collect3DENHistory|collectiveRTD|combatMode|commandArtilleryFire|commandChat|commander|commandFire|commandFollow|commandFSM|commandGetOut|commandingMenu|commandMove|commandRadio|commandStop|commandSuppressiveFire|commandTarget|commandWatch|comment|commitOverlay|compile|compileFinal|completedFSM|composeText|configClasses|configFile|configHierarchy|configName|configNull|configProperties|configSourceAddonList|configSourceMod|configSourceModList|confirmSensorTarget|connectTerminalToUAV|controlNull|controlsGroupCtrl|copyFromClipboard|copyToClipboard|copyWaypoints|cos|count|countEnemy|countFriendly|countSide|countType|countUnknown|create3DENComposition|create3DENEntity|createAgent|createCenter|createDialog|createDiaryLink|createDiaryRecord|createDiarySubject|createDisplay|createGearDialog|createGroup|createGuardedPoint|createLocation|createMarker|createMarkerLocal|createMenu|createMine|createMissionDisplay|createMPCampaignDisplay|createSimpleObject|createSimpleTask|createSite|createSoundSource|createTask|createTeam|createTrigger|createUnit|createVehicle|createVehicleCrew|createVehicleLocal|crew|ctAddHeader|ctAddRow|ctClear|ctCurSel|ctData|ctFindHeaderRows|ctFindRowHeader|ctHeaderControls|ctHeaderCount|ctRemoveHeaders|ctRemoveRows|ctrlActivate|ctrlAddEventHandler|ctrlAngle|ctrlAutoScrollDelay|ctrlAutoScrollRewind|ctrlAutoScrollSpeed|ctrlChecked|ctrlClassName|ctrlCommit|ctrlCommitted|ctrlCreate|ctrlDelete|ctrlEnable|ctrlEnabled|ctrlFade|ctrlHTMLLoaded|ctrlIDC|ctrlIDD|ctrlMapAnimAdd|ctrlMapAnimClear|ctrlMapAnimCommit|ctrlMapAnimDone|ctrlMapCursor|ctrlMapMouseOver|ctrlMapScale|ctrlMapScreenToWorld|ctrlMapWorldToScreen|ctrlModel|ctrlModelDirAndUp|ctrlModelScale|ctrlParent|ctrlParentControlsGroup|ctrlPosition|ctrlRemoveAllEventHandlers|ctrlRemoveEventHandler|ctrlScale|ctrlSetActiveColor|ctrlSetAngle|ctrlSetAutoScrollDelay|ctrlSetAutoScrollRewind|ctrlSetAutoScrollSpeed|ctrlSetBackgroundColor|ctrlSetChecked|ctrlSetDisabledColor|ctrlSetEventHandler|ctrlSetFade|ctrlSetFocus|ctrlSetFont|ctrlSetFontH1|ctrlSetFontH1B|ctrlSetFontH2|ctrlSetFontH2B|ctrlSetFontH3|ctrlSetFontH3B|ctrlSetFontH4|ctrlSetFontH4B|ctrlSetFontH5|ctrlSetFontH5B|ctrlSetFontH6|ctrlSetFontH6B|ctrlSetFontHeight|ctrlSetFontHeightH1|ctrlSetFontHeightH2|ctrlSetFontHeightH3|ctrlSetFontHeightH4|ctrlSetFontHeightH5|ctrlSetFontHeightH6|ctrlSetFontHeightSecondary|ctrlSetFontP|ctrlSetFontPB|ctrlSetFontSecondary|ctrlSetForegroundColor|ctrlSetModel|ctrlSetModelDirAndUp|ctrlSetModelScale|ctrlSetPixelPrecision|ctrlSetPosition|ctrlSetScale|ctrlSetStructuredText|ctrlSetText|ctrlSetTextColor|ctrlSetTextColorSecondary|ctrlSetTextSecondary|ctrlSetTooltip|ctrlSetTooltipColorBox|ctrlSetTooltipColorShade|ctrlSetTooltipColorText|ctrlShow|ctrlShown|ctrlText|ctrlTextHeight|ctrlTextSecondary|ctrlTextWidth|ctrlType|ctrlVisible|ctRowControls|ctRowCount|ctSetCurSel|ctSetData|ctSetHeaderTemplate|ctSetRowTemplate|ctSetValue|ctValue|curatorAddons|curatorCamera|curatorCameraArea|curatorCameraAreaCeiling|curatorCoef|curatorEditableObjects|curatorEditingArea|curatorEditingAreaType|curatorMouseOver|curatorPoints|curatorRegisteredObjects|curatorSelected|curatorWaypointCost|current3DENOperation|currentChannel|currentCommand|currentMagazine|currentMagazineDetail|currentMagazineDetailTurret|currentMagazineTurret|currentMuzzle|currentNamespace|currentTask|currentTasks|currentThrowable|currentVisionMode|currentWaypoint|currentWeapon|currentWeaponMode|currentWeaponTurret|currentZeroing|cursorObject|cursorTarget|customChat|customRadio|cutFadeOut|cutObj|cutRsc|cutText|damage|date|dateToNumber|daytime|deActivateKey|debriefingText|debugFSM|debugLog|deg|delete3DENEntities|deleteAt|deleteCenter|deleteCollection|deleteEditorObject|deleteGroup|deleteGroupWhenEmpty|deleteIdentity|deleteLocation|deleteMarker|deleteMarkerLocal|deleteRange|deleteResources|deleteSite|deleteStatus|deleteTeam|deleteVehicle|deleteVehicleCrew|deleteWaypoint|detach|detectedMines|diag_activeMissionFSMs|diag_activeScripts|diag_activeSQFScripts|diag_activeSQSScripts|diag_captureFrame|diag_captureFrameToFile|diag_captureSlowFrame|diag_codePerformance|diag_drawMode|diag_dynamicSimulationEnd|diag_enable|diag_enabled|diag_fps|diag_fpsMin|diag_frameNo|diag_lightNewLoad|diag_list|diag_log|diag_logSlowFrame|diag_mergeConfigFile|diag_recordTurretLimits|diag_setLightNew|diag_tickTime|diag_toggle|dialog|diarySubjectExists|didJIP|didJIPOwner|difficulty|difficultyEnabled|difficultyEnabledRTD|difficultyOption|direction|directSay|disableAI|disableCollisionWith|disableConversation|disableDebriefingStats|disableMapIndicators|disableNVGEquipment|disableRemoteSensors|disableSerialization|disableTIEquipment|disableUAVConnectability|disableUserInput|displayAddEventHandler|displayCtrl|displayNull|displayParent|displayRemoveAllEventHandlers|displayRemoveEventHandler|displaySetEventHandler|dissolveTeam|distance|distance2D|distanceSqr|distributionRegion|do3DENAction|doArtilleryFire|doFire|doFollow|doFSM|doGetOut|doMove|doorPhase|doStop|doSuppressiveFire|doTarget|doWatch|drawArrow|drawEllipse|drawIcon|drawIcon3D|drawLine|drawLine3D|drawLink|drawLocation|drawPolygon|drawRectangle|drawTriangle|driver|drop|dynamicSimulationDistance|dynamicSimulationDistanceCoef|dynamicSimulationEnabled|dynamicSimulationSystemEnabled|east|edit3DENMissionAttributes|editObject|editorSetEventHandler|effectiveCommander|emptyPositions|enableAI|enableAIFeature|enableAimPrecision|enableAttack|enableAudioFeature|enableAutoStartUpRTD|enableAutoTrimRTD|enableCamShake|enableCaustics|enableChannel|enableCollisionWith|enableCopilot|enableDebriefingStats|enableDiagLegend|enableDynamicSimulation|enableDynamicSimulationSystem|enableEndDialog|enableEngineArtillery|enableEnvironment|enableFatigue|enableGunLights|enableInfoPanelComponent|enableIRLasers|enableMimics|enablePersonTurret|enableRadio|enableReload|enableRopeAttach|enableSatNormalOnDetail|enableSaving|enableSentences|enableSimulation|enableSimulationGlobal|enableStamina|enableStressDamage|enableTeamSwitch|enableTraffic|enableUAVConnectability|enableUAVWaypoints|enableVehicleCargo|enableVehicleSensor|enableWeaponDisassembly|endl|endLoadingScreen|endMission|engineOn|enginesIsOnRTD|enginesPowerRTD|enginesRpmRTD|enginesTorqueRTD|entities|environmentEnabled|estimatedEndServerTime|estimatedTimeLeft|evalObjectArgument|everyBackpack|everyContainer|exec|execEditorScript|exp|expectedDestination|exportJIPMessages|eyeDirection|eyePos|face|faction|fadeMusic|fadeRadio|fadeSound|fadeSpeech|failMission|fillWeaponsFromPool|find|findCover|findDisplay|findEditorObject|findEmptyPosition|findEmptyPositionReady|findIf|findNearestEnemy|finishMissionInit|finite|fire|fireAtTarget|firstBackpack|flag|flagAnimationPhase|flagOwner|flagSide|flagTexture|fleeing|floor|flyInHeight|flyInHeightASL|fog|fogForecast|fogParams|forceAddUniform|forceAtPositionRTD|forcedMap|forceEnd|forceFlagTexture|forceFollowRoad|forceGeneratorRTD|forceMap|forceRespawn|forceSpeed|forceWalk|forceWeaponFire|forceWeatherChange|forgetTarget|format|formation|formationDirection|formationLeader|formationMembers|formationPosition|formationTask|formatText|formLeader|freeLook|fromEditor|fuel|fullCrew|gearIDCAmmoCount|gearSlotAmmoCount|gearSlotData|get3DENActionState|get3DENAttribute|get3DENCamera|get3DENConnections|get3DENEntity|get3DENEntityID|get3DENGrid|get3DENIconsVisible|get3DENLayerEntities|get3DENLinesVisible|get3DENMissionAttribute|get3DENMouseOver|get3DENSelected|getAimingCoef|getAllEnvSoundControllers|getAllHitPointsDamage|getAllOwnedMines|getAllSoundControllers|getAmmoCargo|getAnimAimPrecision|getAnimSpeedCoef|getArray|getArtilleryAmmo|getArtilleryComputerSettings|getArtilleryETA|getAssignedCuratorLogic|getAssignedCuratorUnit|getBackpackCargo|getBleedingRemaining|getBurningValue|getCameraViewDirection|getCargoIndex|getCenterOfMass|getClientState|getClientStateNumber|getCompatiblePylonMagazines|getConnectedUAV|getContainerMaxLoad|getCursorObjectParams|getCustomAimCoef|getDammage|getDescription|getDir|getDirVisual|getDLCAssetsUsage|getDLCAssetsUsageByName|getDLCs|getDLCUsageTime|getEditorCamera|getEditorMode|getEditorObjectScope|getElevationOffset|getEngineTargetRpmRTD|getEnvSoundController|getFatigue|getFieldManualStartPage|getForcedFlagTexture|getFriend|getFSMVariable|getFuelCargo|getGroupIcon|getGroupIconParams|getGroupIcons|getHideFrom|getHit|getHitIndex|getHitPointDamage|getItemCargo|getMagazineCargo|getMarkerColor|getMarkerPos|getMarkerSize|getMarkerType|getMass|getMissionConfig|getMissionConfigValue|getMissionDLCs|getMissionLayerEntities|getMissionLayers|getModelInfo|getMousePosition|getMusicPlayedTime|getNumber|getObjectArgument|getObjectChildren|getObjectDLC|getObjectMaterials|getObjectProxy|getObjectTextures|getObjectType|getObjectViewDistance|getOxygenRemaining|getPersonUsedDLCs|getPilotCameraDirection|getPilotCameraPosition|getPilotCameraRotation|getPilotCameraTarget|getPlateNumber|getPlayerChannel|getPlayerScores|getPlayerUID|getPlayerUIDOld|getPos|getPosASL|getPosASLVisual|getPosASLW|getPosATL|getPosATLVisual|getPosVisual|getPosWorld|getPylonMagazines|getRelDir|getRelPos|getRemoteSensorsDisabled|getRepairCargo|getResolution|getRotorBrakeRTD|getShadowDistance|getShotParents|getSlingLoad|getSoundController|getSoundControllerResult|getSpeed|getStamina|getStatValue|getSuppression|getTerrainGrid|getTerrainHeightASL|getText|getTotalDLCUsageTime|getTrimOffsetRTD|getUnitLoadout|getUnitTrait|getUserMFDText|getUserMFDValue|getVariable|getVehicleCargo|getWeaponCargo|getWeaponSway|getWingsOrientationRTD|getWingsPositionRTD|getWPPos|glanceAt|globalChat|globalRadio|goggles|group|groupChat|groupFromNetId|groupIconSelectable|groupIconsVisible|groupId|groupOwner|groupRadio|groupSelectedUnits|groupSelectUnit|grpNull|gunner|gusts|halt|handgunItems|handgunMagazine|handgunWeapon|handsHit|hasInterface|hasPilotCamera|hasWeapon|hcAllGroups|hcGroupParams|hcLeader|hcRemoveAllGroups|hcRemoveGroup|hcSelected|hcSelectGroup|hcSetGroup|hcShowBar|hcShownBar|headgear|hideBody|hideObject|hideObjectGlobal|hideSelection|hint|hintC|hintCadet|hintSilent|hmd|hostMission|htmlLoad|HUDMovementLevels|humidity|image|importAllGroups|importance|in|inArea|inAreaArray|incapacitatedState|independent|inflame|inflamed|infoPanel|infoPanelComponentEnabled|infoPanelComponents|infoPanels|inGameUISetEventHandler|inheritsFrom|initAmbientLife|inPolygon|inputAction|inRangeOfArtillery|insertEditorObject|intersect|is3DEN|is3DENMultiplayer|isAbleToBreathe|isAgent|isAimPrecisionEnabled|isArray|isAutoHoverOn|isAutonomous|isAutoStartUpEnabledRTD|isAutotest|isAutoTrimOnRTD|isBleeding|isBurning|isClass|isCollisionLightOn|isCopilotEnabled|isDamageAllowed|isDedicated|isDLCAvailable|isEngineOn|isEqualTo|isEqualType|isEqualTypeAll|isEqualTypeAny|isEqualTypeArray|isEqualTypeParams|isFilePatchingEnabled|isFlashlightOn|isFlatEmpty|isForcedWalk|isFormationLeader|isGroupDeletedWhenEmpty|isHidden|isInRemainsCollector|isInstructorFigureEnabled|isIRLaserOn|isKeyActive|isKindOf|isLaserOn|isLightOn|isLocalized|isManualFire|isMarkedForCollection|isMultiplayer|isMultiplayerSolo|isNil|isNull|isNumber|isObjectHidden|isObjectRTD|isOnRoad|isPipEnabled|isPlayer|isRealTime|isRemoteExecuted|isRemoteExecutedJIP|isServer|isShowing3DIcons|isSimpleObject|isSprintAllowed|isStaminaEnabled|isSteamMission|isStreamFriendlyUIEnabled|isStressDamageEnabled|isText|isTouchingGround|isTurnedOut|isTutHintsEnabled|isUAVConnectable|isUAVConnected|isUIContext|isUniformAllowed|isVehicleCargo|isVehicleRadarOn|isVehicleSensorEnabled|isWalking|isWeaponDeployed|isWeaponRested|itemCargo|items|itemsWithMagazines|join|joinAs|joinAsSilent|joinSilent|joinString|kbAddDatabase|kbAddDatabaseTargets|kbAddTopic|kbHasTopic|kbReact|kbRemoveTopic|kbTell|kbWasSaid|keyImage|keyName|knowsAbout|land|landAt|landResult|language|laserTarget|lbAdd|lbClear|lbColor|lbColorRight|lbCurSel|lbData|lbDelete|lbIsSelected|lbPicture|lbPictureRight|lbSelection|lbSetColor|lbSetColorRight|lbSetCurSel|lbSetData|lbSetPicture|lbSetPictureColor|lbSetPictureColorDisabled|lbSetPictureColorSelected|lbSetPictureRight|lbSetPictureRightColor|lbSetPictureRightColorDisabled|lbSetPictureRightColorSelected|lbSetSelectColor|lbSetSelectColorRight|lbSetSelected|lbSetText|lbSetTextRight|lbSetTooltip|lbSetValue|lbSize|lbSort|lbSortByValue|lbText|lbTextRight|lbValue|leader|leaderboardDeInit|leaderboardGetRows|leaderboardInit|leaderboardRequestRowsFriends|leaderboardRequestRowsGlobal|leaderboardRequestRowsGlobalAroundUser|leaderboardsRequestUploadScore|leaderboardsRequestUploadScoreKeepBest|leaderboardState|leaveVehicle|libraryCredits|libraryDisclaimers|lifeState|lightAttachObject|lightDetachObject|lightIsOn|lightnings|limitSpeed|linearConversion|lineBreak|lineIntersects|lineIntersectsObjs|lineIntersectsSurfaces|lineIntersectsWith|linkItem|list|listObjects|listRemoteTargets|listVehicleSensors|ln|lnbAddArray|lnbAddColumn|lnbAddRow|lnbClear|lnbColor|lnbColorRight|lnbCurSelRow|lnbData|lnbDeleteColumn|lnbDeleteRow|lnbGetColumnsPosition|lnbPicture|lnbPictureRight|lnbSetColor|lnbSetColorRight|lnbSetColumnsPos|lnbSetCurSelRow|lnbSetData|lnbSetPicture|lnbSetPictureColor|lnbSetPictureColorRight|lnbSetPictureColorSelected|lnbSetPictureColorSelectedRight|lnbSetPictureRight|lnbSetText|lnbSetTextRight|lnbSetValue|lnbSize|lnbSort|lnbSortByValue|lnbText|lnbTextRight|lnbValue|load|loadAbs|loadBackpack|loadFile|loadGame|loadIdentity|loadMagazine|loadOverlay|loadStatus|loadUniform|loadVest|local|localize|locationNull|locationPosition|lock|lockCameraTo|lockCargo|lockDriver|locked|lockedCargo|lockedDriver|lockedTurret|lockIdentity|lockTurret|lockWP|log|logEntities|logNetwork|logNetworkTerminate|lookAt|lookAtPos|magazineCargo|magazines|magazinesAllTurrets|magazinesAmmo|magazinesAmmoCargo|magazinesAmmoFull|magazinesDetail|magazinesDetailBackpack|magazinesDetailUniform|magazinesDetailVest|magazinesTurret|magazineTurretAmmo|mapAnimAdd|mapAnimClear|mapAnimCommit|mapAnimDone|mapCenterOnCamera|mapGridPosition|markAsFinishedOnSteam|markerAlpha|markerBrush|markerColor|markerDir|markerPos|markerShape|markerSize|markerText|markerType|max|members|menuAction|menuAdd|menuChecked|menuClear|menuCollapse|menuData|menuDelete|menuEnable|menuEnabled|menuExpand|menuHover|menuPicture|menuSetAction|menuSetCheck|menuSetData|menuSetPicture|menuSetValue|menuShortcut|menuShortcutText|menuSize|menuSort|menuText|menuURL|menuValue|min|mineActive|mineDetectedBy|missionConfigFile|missionDifficulty|missionName|missionNamespace|missionStart|missionVersion|modelToWorld|modelToWorldVisual|modelToWorldVisualWorld|modelToWorldWorld|modParams|moonIntensity|moonPhase|morale|move|move3DENCamera|moveInAny|moveInCargo|moveInCommander|moveInDriver|moveInGunner|moveInTurret|moveObjectToEnd|moveOut|moveTime|moveTo|moveToCompleted|moveToFailed|musicVolume|name|nameSound|nearEntities|nearestBuilding|nearestLocation|nearestLocations|nearestLocationWithDubbing|nearestObject|nearestObjects|nearestTerrainObjects|nearObjects|nearObjectsReady|nearRoads|nearSupplies|nearTargets|needReload|netId|netObjNull|newOverlay|nextMenuItemIndex|nextWeatherChange|nMenuItems|numberOfEnginesRTD|numberToDate|objectCurators|objectFromNetId|objectParent|objNull|objStatus|onBriefingGear|onBriefingGroup|onBriefingNotes|onBriefingPlan|onBriefingTeamSwitch|onCommandModeChanged|onDoubleClick|onEachFrame|onGroupIconClick|onGroupIconOverEnter|onGroupIconOverLeave|onHCGroupSelectionChanged|onMapSingleClick|onPlayerConnected|onPlayerDisconnected|onPreloadFinished|onPreloadStarted|onShowNewObject|onTeamSwitch|openCuratorInterface|openDLCPage|openDSInterface|openMap|openSteamApp|openYoutubeVideo|opfor|orderGetIn|overcast|overcastForecast|owner|param|params|parseNumber|parseSimpleArray|parseText|parsingNamespace|particlesQuality|pi|pickWeaponPool|pitch|pixelGrid|pixelGridBase|pixelGridNoUIScale|pixelH|pixelW|playableSlotsNumber|playableUnits|playAction|playActionNow|player|playerRespawnTime|playerSide|playersNumber|playGesture|playMission|playMove|playMoveNow|playMusic|playScriptedMission|playSound|playSound3D|position|positionCameraToWorld|posScreenToWorld|posWorldToScreen|ppEffectAdjust|ppEffectCommit|ppEffectCommitted|ppEffectCreate|ppEffectDestroy|ppEffectEnable|ppEffectEnabled|ppEffectForceInNVG|precision|preloadCamera|preloadObject|preloadSound|preloadTitleObj|preloadTitleRsc|primaryWeapon|primaryWeaponItems|primaryWeaponMagazine|priority|processDiaryLink|processInitCommands|productVersion|profileName|profileNamespace|profileNameSteam|progressLoadingScreen|progressPosition|progressSetPosition|publicVariable|publicVariableClient|publicVariableServer|pushBack|pushBackUnique|putWeaponPool|queryItemsPool|queryMagazinePool|queryWeaponPool|rad|radioChannelAdd|radioChannelCreate|radioChannelRemove|radioChannelSetCallSign|radioChannelSetLabel|radioVolume|rain|rainbow|random|rank|rankId|rating|rectangular|registeredTasks|registerTask|reload|reloadEnabled|remoteControl|remoteExec|remoteExecCall|remoteExecutedOwner|remove3DENConnection|remove3DENEventHandler|remove3DENLayer|removeAction|removeAll3DENEventHandlers|removeAllActions|removeAllAssignedItems|removeAllContainers|removeAllCuratorAddons|removeAllCuratorCameraAreas|removeAllCuratorEditingAreas|removeAllEventHandlers|removeAllHandgunItems|removeAllItems|removeAllItemsWithMagazines|removeAllMissionEventHandlers|removeAllMPEventHandlers|removeAllMusicEventHandlers|removeAllOwnedMines|removeAllPrimaryWeaponItems|removeAllWeapons|removeBackpack|removeBackpackGlobal|removeCuratorAddons|removeCuratorCameraArea|removeCuratorEditableObjects|removeCuratorEditingArea|removeDrawIcon|removeDrawLinks|removeEventHandler|removeFromRemainsCollector|removeGoggles|removeGroupIcon|removeHandgunItem|removeHeadgear|removeItem|removeItemFromBackpack|removeItemFromUniform|removeItemFromVest|removeItems|removeMagazine|removeMagazineGlobal|removeMagazines|removeMagazinesTurret|removeMagazineTurret|removeMenuItem|removeMissionEventHandler|removeMPEventHandler|removeMusicEventHandler|removeOwnedMine|removePrimaryWeaponItem|removeSecondaryWeaponItem|removeSimpleTask|removeSwitchableUnit|removeTeamMember|removeUniform|removeVest|removeWeapon|removeWeaponAttachmentCargo|removeWeaponCargo|removeWeaponGlobal|removeWeaponTurret|reportRemoteTarget|requiredVersion|resetCamShake|resetSubgroupDirection|resistance|resize|resources|respawnVehicle|restartEditorCamera|reveal|revealMine|reverse|reversedMouseY|roadAt|roadsConnectedTo|roleDescription|ropeAttachedObjects|ropeAttachedTo|ropeAttachEnabled|ropeAttachTo|ropeCreate|ropeCut|ropeDestroy|ropeDetach|ropeEndPosition|ropeLength|ropes|ropeUnwind|ropeUnwound|rotorsForcesRTD|rotorsRpmRTD|round|runInitScript|safeZoneH|safeZoneW|safeZoneWAbs|safeZoneX|safeZoneXAbs|safeZoneY|save3DENInventory|saveGame|saveIdentity|saveJoysticks|saveOverlay|saveProfileNamespace|saveStatus|saveVar|savingEnabled|say|say2D|say3D|score|scoreSide|screenshot|screenToWorld|scriptDone|scriptName|scriptNull|scudState|secondaryWeapon|secondaryWeaponItems|secondaryWeaponMagazine|select|selectBestPlaces|selectDiarySubject|selectedEditorObjects|selectEditorObject|selectionNames|selectionPosition|selectLeader|selectMax|selectMin|selectNoPlayer|selectPlayer|selectRandom|selectRandomWeighted|selectWeapon|selectWeaponTurret|sendAUMessage|sendSimpleCommand|sendTask|sendTaskResult|sendUDPMessage|serverCommand|serverCommandAvailable|serverCommandExecutable|serverName|serverTime|set|set3DENAttribute|set3DENAttributes|set3DENGrid|set3DENIconsVisible|set3DENLayer|set3DENLinesVisible|set3DENLogicType|set3DENMissionAttribute|set3DENMissionAttributes|set3DENModelsVisible|set3DENObjectType|set3DENSelected|setAccTime|setActualCollectiveRTD|setAirplaneThrottle|setAirportSide|setAmmo|setAmmoCargo|setAmmoOnPylon|setAnimSpeedCoef|setAperture|setApertureNew|setArmoryPoints|setAttributes|setAutonomous|setBehaviour|setBleedingRemaining|setBrakesRTD|setCameraInterest|setCamShakeDefParams|setCamShakeParams|setCamUseTI|setCaptive|setCenterOfMass|setCollisionLight|setCombatMode|setCompassOscillation|setConvoySeparation|setCuratorCameraAreaCeiling|setCuratorCoef|setCuratorEditingAreaType|setCuratorWaypointCost|setCurrentChannel|setCurrentTask|setCurrentWaypoint|setCustomAimCoef|setCustomWeightRTD|setDamage|setDammage|setDate|setDebriefingText|setDefaultCamera|setDestination|setDetailMapBlendPars|setDir|setDirection|setDrawIcon|setDriveOnPath|setDropInterval|setDynamicSimulationDistance|setDynamicSimulationDistanceCoef|setEditorMode|setEditorObjectScope|setEffectCondition|setEngineRpmRTD|setFace|setFaceAnimation|setFatigue|setFeatureType|setFlagAnimationPhase|setFlagOwner|setFlagSide|setFlagTexture|setFog|setForceGeneratorRTD|setFormation|setFormationTask|setFormDir|setFriend|setFromEditor|setFSMVariable|setFuel|setFuelCargo|setGroupIcon|setGroupIconParams|setGroupIconsSelectable|setGroupIconsVisible|setGroupId|setGroupIdGlobal|setGroupOwner|setGusts|setHideBehind|setHit|setHitIndex|setHitPointDamage|setHorizonParallaxCoef|setHUDMovementLevels|setIdentity|setImportance|setInfoPanel|setLeader|setLightAmbient|setLightAttenuation|setLightBrightness|setLightColor|setLightDayLight|setLightFlareMaxDistance|setLightFlareSize|setLightIntensity|setLightnings|setLightUseFlare|setLocalWindParams|setMagazineTurretAmmo|setMarkerAlpha|setMarkerAlphaLocal|setMarkerBrush|setMarkerBrushLocal|setMarkerColor|setMarkerColorLocal|setMarkerDir|setMarkerDirLocal|setMarkerPos|setMarkerPosLocal|setMarkerShape|setMarkerShapeLocal|setMarkerSize|setMarkerSizeLocal|setMarkerText|setMarkerTextLocal|setMarkerType|setMarkerTypeLocal|setMass|setMimic|setMousePosition|setMusicEffect|setMusicEventHandler|setName|setNameSound|setObjectArguments|setObjectMaterial|setObjectMaterialGlobal|setObjectProxy|setObjectTexture|setObjectTextureGlobal|setObjectViewDistance|setOvercast|setOwner|setOxygenRemaining|setParticleCircle|setParticleClass|setParticleFire|setParticleParams|setParticleRandom|setPilotCameraDirection|setPilotCameraRotation|setPilotCameraTarget|setPilotLight|setPiPEffect|setPitch|setPlateNumber|setPlayable|setPlayerRespawnTime|setPos|setPosASL|setPosASL2|setPosASLW|setPosATL|setPosition|setPosWorld|setPylonLoadOut|setPylonsPriority|setRadioMsg|setRain|setRainbow|setRandomLip|setRank|setRectangular|setRepairCargo|setRotorBrakeRTD|setShadowDistance|setShotParents|setSide|setSimpleTaskAlwaysVisible|setSimpleTaskCustomData|setSimpleTaskDescription|setSimpleTaskDestination|setSimpleTaskTarget|setSimpleTaskType|setSimulWeatherLayers|setSize|setSkill|setSlingLoad|setSoundEffect|setSpeaker|setSpeech|setSpeedMode|setStamina|setStaminaScheme|setStatValue|setSuppression|setSystemOfUnits|setTargetAge|setTaskMarkerOffset|setTaskResult|setTaskState|setTerrainGrid|setText|setTimeMultiplier|setTitleEffect|setToneMapping|setToneMappingParams|setTrafficDensity|setTrafficDistance|setTrafficGap|setTrafficSpeed|setTriggerActivation|setTriggerArea|setTriggerStatements|setTriggerText|setTriggerTimeout|setTriggerType|setType|setUnconscious|setUnitAbility|setUnitLoadout|setUnitPos|setUnitPosWeak|setUnitRank|setUnitRecoilCoefficient|setUnitTrait|setUnloadInCombat|setUserActionText|setUserMFDText|setUserMFDValue|setVariable|setVectorDir|setVectorDirAndUp|setVectorUp|setVehicleAmmo|setVehicleAmmoDef|setVehicleArmor|setVehicleCargo|setVehicleId|setVehicleInit|setVehicleLock|setVehiclePosition|setVehicleRadar|setVehicleReceiveRemoteTargets|setVehicleReportOwnPosition|setVehicleReportRemoteTargets|setVehicleTIPars|setVehicleVarName|setVelocity|setVelocityModelSpace|setVelocityTransformation|setViewDistance|setVisibleIfTreeCollapsed|setWantedRpmRTD|setWaves|setWaypointBehaviour|setWaypointCombatMode|setWaypointCompletionRadius|setWaypointDescription|setWaypointForceBehaviour|setWaypointFormation|setWaypointHousePosition|setWaypointLoiterRadius|setWaypointLoiterType|setWaypointName|setWaypointPosition|setWaypointScript|setWaypointSpeed|setWaypointStatements|setWaypointTimeout|setWaypointType|setWaypointVisible|setWeaponReloadingTime|setWind|setWindDir|setWindForce|setWindStr|setWingForceScaleRTD|setWPPos|show3DIcons|showChat|showCinemaBorder|showCommandingMenu|showCompass|showCuratorCompass|showGPS|showHUD|showLegend|showMap|shownArtilleryComputer|shownChat|shownCompass|shownCuratorCompass|showNewEditorObject|shownGPS|shownHUD|shownMap|shownPad|shownRadio|shownScoretable|shownUAVFeed|shownWarrant|shownWatch|showPad|showRadio|showScoretable|showSubtitles|showUAVFeed|showWarrant|showWatch|showWaypoint|showWaypoints|side|sideAmbientLife|sideChat|sideEmpty|sideEnemy|sideFriendly|sideLogic|sideRadio|sideUnknown|simpleTasks|simulationEnabled|simulCloudDensity|simulCloudOcclusion|simulInClouds|simulWeatherSync|sin|size|sizeOf|skill|skillFinal|skipTime|sleep|sliderPosition|sliderRange|sliderSetPosition|sliderSetRange|sliderSetSpeed|sliderSpeed|slingLoadAssistantShown|soldierMagazines|someAmmo|sort|soundVolume|speaker|speed|speedMode|splitString|sqrt|squadParams|stance|startLoadingScreen|stop|stopEngineRTD|stopped|str|sunOrMoon|supportInfo|suppressFor|surfaceIsWater|surfaceNormal|surfaceType|swimInDepth|switchableUnits|switchAction|switchCamera|switchGesture|switchLight|switchMove|synchronizedObjects|synchronizedTriggers|synchronizedWaypoints|synchronizeObjectsAdd|synchronizeObjectsRemove|synchronizeTrigger|synchronizeWaypoint|systemChat|systemOfUnits|tan|targetKnowledge|targets|targetsAggregate|targetsQuery|taskAlwaysVisible|taskChildren|taskCompleted|taskCustomData|taskDescription|taskDestination|taskHint|taskMarkerOffset|taskNull|taskParent|taskResult|taskState|taskType|teamMember|teamMemberNull|teamName|teams|teamSwitch|teamSwitchEnabled|teamType|terminate|terrainIntersect|terrainIntersectASL|terrainIntersectAtASL|text|textLog|textLogFormat|tg|time|timeMultiplier|titleCut|titleFadeOut|titleObj|titleRsc|titleText|toArray|toFixed|toLower|toString|toUpper|triggerActivated|triggerActivation|triggerArea|triggerAttachedVehicle|triggerAttachObject|triggerAttachVehicle|triggerDynamicSimulation|triggerStatements|triggerText|triggerTimeout|triggerTimeoutCurrent|triggerType|turretLocal|turretOwner|turretUnit|tvAdd|tvClear|tvCollapse|tvCollapseAll|tvCount|tvCurSel|tvData|tvDelete|tvExpand|tvExpandAll|tvPicture|tvPictureRight|tvSetColor|tvSetCurSel|tvSetData|tvSetPicture|tvSetPictureColor|tvSetPictureColorDisabled|tvSetPictureColorSelected|tvSetPictureRight|tvSetPictureRightColor|tvSetPictureRightColorDisabled|tvSetPictureRightColorSelected|tvSetSelectColor|tvSetText|tvSetTooltip|tvSetValue|tvSort|tvSortByValue|tvText|tvTooltip|tvValue|type|typeName|typeOf|UAVControl|uiNamespace|uiSleep|unassignCurator|unassignItem|unassignTeam|unassignVehicle|underwater|uniform|uniformContainer|uniformItems|uniformMagazines|unitAddons|unitAimPosition|unitAimPositionVisual|unitBackpack|unitIsUAV|unitPos|unitReady|unitRecoilCoefficient|units|unitsBelowHeight|unlinkItem|unlockAchievement|unregisterTask|updateDrawIcon|updateMenuItem|updateObjectTree|useAIOperMapObstructionTest|useAISteeringComponent|useAudioTimeForMoves|userInputDisabled|vectorAdd|vectorCos|vectorCrossProduct|vectorDiff|vectorDir|vectorDirVisual|vectorDistance|vectorDistanceSqr|vectorDotProduct|vectorFromTo|vectorMagnitude|vectorMagnitudeSqr|vectorModelToWorld|vectorModelToWorldVisual|vectorMultiply|vectorNormalized|vectorUp|vectorUpVisual|vectorWorldToModel|vectorWorldToModelVisual|vehicle|vehicleCargoEnabled|vehicleChat|vehicleRadio|vehicleReceiveRemoteTargets|vehicleReportOwnPosition|vehicleReportRemoteTargets|vehicles|vehicleVarName|velocity|velocityModelSpace|verifySignature|vest|vestContainer|vestItems|vestMagazines|viewDistance|visibleCompass|visibleGPS|visibleMap|visiblePosition|visiblePositionASL|visibleScoretable|visibleWatch|waitUntil|waves|waypointAttachedObject|waypointAttachedVehicle|waypointAttachObject|waypointAttachVehicle|waypointBehaviour|waypointCombatMode|waypointCompletionRadius|waypointDescription|waypointForceBehaviour|waypointFormation|waypointHousePosition|waypointLoiterRadius|waypointLoiterType|waypointName|waypointPosition|waypoints|waypointScript|waypointsEnabledUAV|waypointShow|waypointSpeed|waypointStatements|waypointTimeout|waypointTimeoutCurrent|waypointType|waypointVisible|weaponAccessories|weaponAccessoriesCargo|weaponCargo|weaponDirection|weaponInertia|weaponLowered|weapons|weaponsItems|weaponsItemsCargo|weaponState|weaponsTurret|weightRTD|west|WFSideText|wind|windDir|windRTD|windStr|wingsForcesRTD|worldName|worldSize|worldToModel|worldToModelVisual|worldToScreen)\b/i,
  number: /(?:\$|\b0x)[\da-f]+\b|(?:\B\.\d+|\b\d+(?:\.\d+)?)(?:e[+-]?\d+)?\b/i,
  operator: /##|>>|&&|\|\||[!=<>]=?|[-+*/%#^]|\b(?:and|mod|not|or)\b/i,
  'magic-variable': {
    pattern:
      /\b(?:this|thisList|thisTrigger|_exception|_fnc_scriptName|_fnc_scriptNameParent|_forEachIndex|_this|_thisEventHandler|_thisFSM|_thisScript|_x)\b/i,
    alias: 'keyword',
  },
  constant: /\bDIK(?:_[a-z\d]+)+\b/i,
})),
  Prism.languages.insertBefore('sqf', 'string', {
    macro: {
      pattern: /(^[ \t]*)#[a-z](?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
      inside: {
        directive: { pattern: /#[a-z]+\b/i, alias: 'keyword' },
        comment: Prism.languages.sqf.comment,
      },
    },
  }),
  delete Prism.languages.sqf['class-name']
!(function (e) {
  var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    t = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0,
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0,
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: n,
            number: r,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/,
          },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: n,
      boolean: /\b(?:false|true)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
      ],
      number: r,
      punctuation: /[{}()\[\];:,]/,
    }
  ;(t.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      delimiter: { pattern: /^\{|\}$/, alias: 'punctuation' },
      rest: t,
    },
  }),
    (t.func = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: { function: /^[^(]+/, rest: t },
    }),
    (e.languages.stylus = {
      'atrule-declaration': {
        pattern: /(^[ \t]*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: t },
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: t },
      },
      statement: {
        pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: t },
      },
      'property-declaration': {
        pattern:
          /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
        lookbehind: !0,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: { interpolation: t.interpolation },
          },
          rest: t,
        },
      },
      selector: {
        pattern:
          /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
        lookbehind: !0,
        inside: {
          interpolation: t.interpolation,
          comment: t.comment,
          punctuation: /[{},]/,
        },
      },
      func: t.func,
      string: t.string,
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0,
      },
      interpolation: t.interpolation,
      punctuation: /[{}()\[\];:.]/,
    })
})(Prism)
;(Prism.languages.swift = {
  comment: {
    pattern:
      /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0,
  },
  'string-literal': [
    {
      pattern: RegExp(
        '(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null,
        },
        'interpolation-punctuation': {
          pattern: /^\)|\\\($/,
          alias: 'punctuation',
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/,
      },
    },
    {
      pattern: RegExp(
        '(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null,
        },
        'interpolation-punctuation': {
          pattern: /^\)|\\#+\($/,
          alias: 'punctuation',
        },
        string: /[\s\S]+/,
      },
    },
  ],
  directive: {
    pattern: RegExp(
      '#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)'
    ),
    alias: 'property',
    inside: {
      'directive-name': /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/,
    },
  },
  literal: {
    pattern:
      /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: 'constant',
  },
  'other-directive': { pattern: /#\w+\b/, alias: 'property' },
  attribute: { pattern: /@\w+/, alias: 'atrule' },
  'function-definition': {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: 'function',
  },
  label: {
    pattern:
      /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: 'important',
  },
  keyword:
    /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: { pattern: /\bnil\b/, alias: 'constant' },
  'short-argument': /\$\d+\b/,
  omit: { pattern: /\b_\b/, alias: 'keyword' },
  number:
    /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/,
}),
  Prism.languages.swift['string-literal'].forEach(function (e) {
    e.inside.interpolation.inside = Prism.languages.swift
  })
!(function (e) {
  function t(e, t, a) {
    return {
      pattern: RegExp('<#' + e + '[\\s\\S]*?#>'),
      alias: 'block',
      inside: {
        delimiter: {
          pattern: RegExp('^<#' + e + '|#>$'),
          alias: 'important',
        },
        content: { pattern: /[\s\S]+/, inside: t, alias: a },
      },
    }
  }
  e.languages['t4-templating'] = Object.defineProperty({}, 'createT4', {
    value: function (a) {
      var n = e.languages[a],
        i = 'language-' + a
      return {
        block: {
          pattern: /<#[\s\S]+?#>/,
          inside: {
            directive: t('@', {
              'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                inside: { punctuation: /^=|^["']|["']$/ },
              },
              keyword: /\b\w+(?=\s)/,
              'attr-name': /\b\w+/,
            }),
            expression: t('=', n, i),
            'class-feature': t('\\+', n, i),
            standard: t('', n, i),
          },
        },
      }
    },
  })
})(Prism)
Prism.languages.t4 = Prism.languages['t4-cs'] =
  Prism.languages['t4-templating'].createT4('csharp')
Prism.languages.vbnet = Prism.languages.extend('basic', {
  comment: [
    { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
    { pattern: /(^|[^\\:])'.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(^|[^"])"(?:""|[^"])*"(?!")/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
  punctuation: /[,;:(){}]/,
})
Prism.languages['t4-vb'] = Prism.languages['t4-templating'].createT4('vbnet')
!(function (e) {
  var n = /[*&][^\s[\]{},]+/,
    r =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    t =
      '(?:' +
      r.source +
      '(?:[ \t]+' +
      n.source +
      ')?|' +
      n.source +
      '(?:[ \t]+' +
      r.source +
      ')?)',
    a =
      '(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&\'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*'.replace(
        /<PLAIN>/g,
        function () {
          return '[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]'
        }
      ),
    d = '"(?:[^"\\\\\r\n]|\\\\.)*"|\'(?:[^\'\\\\\r\n]|\\\\.)*\''
  function o(e, n) {
    n = (n || '').replace(/m/g, '') + 'm'
    var r =
      '([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))'
        .replace(/<<prop>>/g, function () {
          return t
        })
        .replace(/<<value>>/g, function () {
          return e
        })
    return RegExp(r, n)
  }
  ;(e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        '([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)'.replace(
          /<<prop>>/g,
          function () {
            return t
          }
        )
      ),
      lookbehind: !0,
      alias: 'string',
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        '((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)'
          .replace(/<<prop>>/g, function () {
            return t
          })
          .replace(/<<key>>/g, function () {
            return '(?:' + a + '|' + d + ')'
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: 'atrule',
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: 'important',
    },
    datetime: {
      pattern: o(
        '\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?'
      ),
      lookbehind: !0,
      alias: 'number',
    },
    boolean: {
      pattern: o('false|true', 'i'),
      lookbehind: !0,
      alias: 'important',
    },
    null: { pattern: o('null|~', 'i'), lookbehind: !0, alias: 'important' },
    string: { pattern: o(d), lookbehind: !0, greedy: !0 },
    number: {
      pattern: o(
        '[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
        'i'
      ),
      lookbehind: !0,
    },
    tag: r,
    important: n,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml)
})(Prism)
Prism.languages.tap = {
  fail: /not ok[^#{\n\r]*/,
  pass: /ok[^#{\n\r]*/,
  pragma: /pragma [+-][a-z]+/,
  bailout: /bail out!.*/i,
  version: /TAP version \d+/i,
  plan: /\b\d+\.\.\d+(?: +#.*)?/,
  subtest: { pattern: /# Subtest(?:: .*)?/, greedy: !0 },
  punctuation: /[{}]/,
  directive: /#.*/,
  yamlish: {
    pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,
    lookbehind: !0,
    inside: Prism.languages.yaml,
    alias: 'language-yaml',
  },
}
Prism.languages.tcl = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
  string: { pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/, greedy: !0 },
  variable: [
    { pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, lookbehind: !0 },
    { pattern: /(\$)\{[^}]+\}/, lookbehind: !0 },
    {
      pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
      lookbehind: !0,
    },
  ],
  function: { pattern: /(^[\t ]*proc[ \t]+)\S+/m, lookbehind: !0 },
  builtin: [
    {
      pattern:
        /(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,
      lookbehind: !0,
    },
    /\b(?:else|elseif)\b/,
  ],
  scope: {
    pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
    lookbehind: !0,
    alias: 'constant',
  },
  keyword: {
    pattern:
      /(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
    lookbehind: !0,
  },
  operator:
    /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,
  punctuation: /[{}()\[\]]/,
}
!(function (e) {
  ;(e.languages.tt2 = e.languages.extend('clike', {
    comment: /#.*|\[%#[\s\S]*?%\]/,
    keyword:
      /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,
    punctuation: /[[\]{},()]/,
  })),
    e.languages.insertBefore('tt2', 'number', {
      operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,
      variable: {
        pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i,
      },
    }),
    e.languages.insertBefore('tt2', 'keyword', {
      delimiter: {
        pattern: /^(?:\[%|%%)-?|-?%\]$/,
        alias: 'punctuation',
      },
    }),
    e.languages.insertBefore('tt2', 'string', {
      'single-quoted-string': {
        pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
        greedy: !0,
        alias: 'string',
      },
      'double-quoted-string': {
        pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
        greedy: !0,
        alias: 'string',
        inside: {
          variable: {
            pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i,
          },
        },
      },
    }),
    delete e.languages.tt2.string,
    e.hooks.add('before-tokenize', function (t) {
      e.languages['markup-templating'].buildPlaceholders(
        t,
        'tt2',
        /\[%[\s\S]+?%\]/g
      )
    }),
    e.hooks.add('after-tokenize', function (t) {
      e.languages['markup-templating'].tokenizePlaceholders(t, 'tt2')
    })
})(Prism)
!(function (n) {
  function e(n, e) {
    return RegExp(
      n
        .replace(/<MOD>/g, function () {
          return '(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})'
        })
        .replace(/<PAR>/g, function () {
          return '(?:\\)|\\((?![^|()\n]+\\)))'
        }),
      e || ''
    )
  }
  var i = {
      css: { pattern: /\{[^{}]+\}/, inside: { rest: n.languages.css } },
      'class-id': {
        pattern: /(\()[^()]+(?=\))/,
        lookbehind: !0,
        alias: 'attr-value',
      },
      lang: {
        pattern: /(\[)[^\[\]]+(?=\])/,
        lookbehind: !0,
        alias: 'attr-value',
      },
      punctuation: /[\\\/]\d+|\S/,
    },
    t = (n.languages.textile = n.languages.extend('markup', {
      phrase: {
        pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
        lookbehind: !0,
        inside: {
          'block-tag': {
            pattern: e('^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\.'),
            inside: {
              modifier: {
                pattern: e('(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)'),
                lookbehind: !0,
                inside: i,
              },
              tag: /^[a-z]\w*/,
              punctuation: /\.$/,
            },
          },
          list: {
            pattern: e('^[*#]+<MOD>*\\s+\\S.*', 'm'),
            inside: {
              modifier: {
                pattern: e('(^[*#]+)<MOD>+'),
                lookbehind: !0,
                inside: i,
              },
              punctuation: /^[*#]+/,
            },
          },
          table: {
            pattern: e(
              '^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|',
              'm'
            ),
            inside: {
              modifier: {
                pattern: e(
                  '(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)'
                ),
                lookbehind: !0,
                inside: i,
              },
              punctuation: /\||^\./,
            },
          },
          inline: {
            pattern: e(
              '(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])'
            ),
            lookbehind: !0,
            inside: {
              bold: {
                pattern: e('(^(\\*\\*?)<MOD>*).+?(?=\\2)'),
                lookbehind: !0,
              },
              italic: {
                pattern: e('(^(__?)<MOD>*).+?(?=\\2)'),
                lookbehind: !0,
              },
              cite: {
                pattern: e('(^\\?\\?<MOD>*).+?(?=\\?\\?)'),
                lookbehind: !0,
                alias: 'string',
              },
              code: {
                pattern: e('(^@<MOD>*).+?(?=@)'),
                lookbehind: !0,
                alias: 'keyword',
              },
              inserted: {
                pattern: e('(^\\+<MOD>*).+?(?=\\+)'),
                lookbehind: !0,
              },
              deleted: {
                pattern: e('(^-<MOD>*).+?(?=-)'),
                lookbehind: !0,
              },
              span: {
                pattern: e('(^%<MOD>*).+?(?=%)'),
                lookbehind: !0,
              },
              modifier: {
                pattern: e('(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+'),
                lookbehind: !0,
                inside: i,
              },
              punctuation: /[*_%?@+\-^~]+/,
            },
          },
          'link-ref': {
            pattern: /^\[[^\]]+\]\S+$/m,
            inside: {
              string: {
                pattern: /(^\[)[^\]]+(?=\])/,
                lookbehind: !0,
              },
              url: { pattern: /(^\])\S+$/, lookbehind: !0 },
              punctuation: /[\[\]]/,
            },
          },
          link: {
            pattern: e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
            inside: {
              text: {
                pattern: e('(^"<MOD>*)[^"]+(?=")'),
                lookbehind: !0,
              },
              modifier: {
                pattern: e('(^")<MOD>+'),
                lookbehind: !0,
                inside: i,
              },
              url: { pattern: /(:).+/, lookbehind: !0 },
              punctuation: /[":]/,
            },
          },
          image: {
            pattern: e(
              '!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?'
            ),
            inside: {
              source: {
                pattern: e(
                  '(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)'
                ),
                lookbehind: !0,
                alias: 'url',
              },
              modifier: {
                pattern: e('(^!)(?:<MOD>|<PAR>|[<>=])+'),
                lookbehind: !0,
                inside: i,
              },
              url: { pattern: /(:).+/, lookbehind: !0 },
              punctuation: /[!:]/,
            },
          },
          footnote: {
            pattern: /\b\[\d+\]/,
            alias: 'comment',
            inside: { punctuation: /\[|\]/ },
          },
          acronym: {
            pattern: /\b[A-Z\d]+\([^)]+\)/,
            inside: {
              comment: {
                pattern: /(\()[^()]+(?=\))/,
                lookbehind: !0,
              },
              punctuation: /[()]/,
            },
          },
          mark: {
            pattern: /\b\((?:C|R|TM)\)/,
            alias: 'comment',
            inside: { punctuation: /[()]/ },
          },
        },
      },
    })),
    a = t.phrase.inside,
    o = {
      inline: a.inline,
      link: a.link,
      image: a.image,
      footnote: a.footnote,
      acronym: a.acronym,
      mark: a.mark,
    }
  t.tag.pattern =
    /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i
  var r = a.inline.inside
  ;(r.bold.inside = o),
    (r.italic.inside = o),
    (r.inserted.inside = o),
    (r.deleted.inside = o),
    (r.span.inside = o)
  var d = a.table.inside
  ;(d.inline = o.inline),
    (d.link = o.link),
    (d.image = o.image),
    (d.footnote = o.footnote),
    (d.acronym = o.acronym),
    (d.mark = o.mark)
})(Prism)
!(function (e) {
  function n(e) {
    return e.replace(/__/g, function () {
      return '(?:[\\w-]+|\'[^\'\n\r]*\'|"(?:\\\\.|[^\\\\"\r\n])*")'
    })
  }
  e.languages.toml = {
    comment: { pattern: /#.*/, greedy: !0 },
    table: {
      pattern: RegExp(
        n('(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])'),
        'm'
      ),
      lookbehind: !0,
      greedy: !0,
      alias: 'class-name',
    },
    key: {
      pattern: RegExp(
        n('(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)'),
        'm'
      ),
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
    },
    string: {
      pattern:
        /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0,
    },
    date: [
      {
        pattern:
          /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
        alias: 'number',
      },
      { pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/, alias: 'number' },
    ],
    number:
      /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /[.,=[\]{}]/,
  }
})(Prism)
;(Prism.languages.twig = {
  comment: /^\{#[\s\S]*?#\}$/,
  'tag-name': { pattern: /(^\{%-?\s*)\w+/, lookbehind: !0, alias: 'keyword' },
  delimiter: { pattern: /^\{[{%]-?|-?[%}]\}$/, alias: 'punctuation' },
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    inside: { punctuation: /^['"]|['"]$/ },
  },
  keyword: /\b(?:even|if|odd)\b/,
  boolean: /\b(?:false|null|true)\b/,
  number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
  operator: [
    {
      pattern:
        /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
      lookbehind: !0,
    },
    /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
  ],
  punctuation: /[()\[\]{}:.,]/,
}),
  Prism.hooks.add('before-tokenize', function (e) {
    'twig' === e.language &&
      Prism.languages['markup-templating'].buildPlaceholders(
        e,
        'twig',
        /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g
      )
  }),
  Prism.hooks.add('after-tokenize', function (e) {
    Prism.languages['markup-templating'].tokenizePlaceholders(e, 'twig')
  })
;(Prism.languages.vala = Prism.languages.extend('clike', {
  'class-name': [
    {
      pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,
      inside: { punctuation: /\./ },
    },
    {
      pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
      lookbehind: !0,
      inside: { punctuation: /\./ },
    },
    {
      pattern:
        /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
      lookbehind: !0,
      inside: { punctuation: /\./ },
    },
    {
      pattern:
        /((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
      lookbehind: !0,
      inside: { punctuation: /\./ },
    },
  ],
  keyword:
    /\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,
  function: /\b\w+(?=\s*\()/,
  number:
    /(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,
  operator: /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,
  punctuation: /[{}[\];(),.:]/,
  constant: /\b[A-Z0-9_]+\b/,
})),
  Prism.languages.insertBefore('vala', 'string', {
    'raw-string': {
      pattern: /"""[\s\S]*?"""/,
      greedy: !0,
      alias: 'string',
    },
    'template-string': {
      pattern: /@"[\s\S]*?"/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\$(?:\([^)]*\)|[a-zA-Z]\w*)/,
          inside: {
            delimiter: {
              pattern: /^\$\(?|\)$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.vala,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.insertBefore('vala', 'keyword', {
    regex: {
      pattern:
        /\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex,
        },
        'regex-delimiter': /^\//,
        'regex-flags': /^[a-z]+$/,
      },
    },
  })
!(function (e) {
  e.languages.velocity = e.languages.extend('markup', {})
  var n = {
    variable: {
      pattern:
        /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
      lookbehind: !0,
      inside: {},
    },
    string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
    number: /\b\d+\b/,
    boolean: /\b(?:false|true)\b/,
    operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
    punctuation: /[(){}[\]:,.]/,
  }
  ;(n.variable.inside = {
    string: n.string,
    function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: !0 },
    number: n.number,
    boolean: n.boolean,
    punctuation: n.punctuation,
  }),
    e.languages.insertBefore('velocity', 'comment', {
      unparsed: {
        pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
        lookbehind: !0,
        greedy: !0,
        inside: { punctuation: /^#\[\[|\]\]#$/ },
      },
      'velocity-comment': [
        {
          pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
          lookbehind: !0,
          greedy: !0,
          alias: 'comment',
        },
        {
          pattern: /(^|[^\\])##.*/,
          lookbehind: !0,
          greedy: !0,
          alias: 'comment',
        },
      ],
      directive: {
        pattern:
          /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
        lookbehind: !0,
        inside: {
          keyword: {
            pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
            inside: { punctuation: /[{}]/ },
          },
          rest: n,
        },
      },
      variable: n.variable,
    }),
    (e.languages.velocity.tag.inside['attr-value'].inside.rest =
      e.languages.velocity)
})(Prism)
Prism.languages.verilog = {
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 },
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  'kernel-function': { pattern: /\B\$\w+\b/, alias: 'property' },
  constant: /\B`\w+\b/,
  function: /\b\w+(?=\()/,
  keyword:
    /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
  important: /\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,
  number:
    /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,
  operator: /[-+{}^~%*\/?=!<>&|]+/,
  punctuation: /[[\];(),.:]/,
}
Prism.languages.vhdl = {
  comment: /--.+/,
  'vhdl-vectors': {
    pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
    alias: 'number',
  },
  'quoted-function': { pattern: /"\S+?"(?=\()/, alias: 'function' },
  string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
  attribute: { pattern: /\b'\w+/, alias: 'attr-name' },
  keyword:
    /\b(?:access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|private|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with)\b/i,
  boolean: /\b(?:false|true)\b/i,
  function: /\w+(?=\()/,
  number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
  operator:
    /[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,
  punctuation: /[{}[\];(),.:]/,
}
Prism.languages.vim = {
  string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
  comment: /".*/,
  function: /\b\w+(?=\()/,
  keyword:
    /\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
  builtin:
    /\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,
  number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
  operator:
    /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
  punctuation: /[{}[\](),;:]/,
}
;(Prism.languages['visual-basic'] = {
  comment: {
    pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
    inside: { keyword: /^REM/i },
  },
  directive: {
    pattern:
      /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,
    alias: 'property',
    greedy: !0,
  },
  string: { pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: !0 },
  date: {
    pattern:
      /#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,
    alias: 'number',
  },
  number:
    /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,
  boolean: /\b(?:False|Nothing|True)\b/i,
  keyword:
    /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
  operator: /[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,
  punctuation: /[{}().,:?]/,
}),
  (Prism.languages.vb = Prism.languages['visual-basic']),
  (Prism.languages.vba = Prism.languages['visual-basic'])
Prism.languages.wasm = {
  comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
  string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
  keyword: [
    { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
    {
      pattern:
        /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
      inside: { punctuation: /\./ },
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
  ],
  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  number:
    /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/,
}
;(Prism.languages.wiki = Prism.languages.extend('markup', {
  'block-comment': {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: !0,
    alias: 'comment',
  },
  heading: {
    pattern: /^(=+)[^=\r\n].*?\1/m,
    inside: { punctuation: /^=+|=+$/, important: /.+/ },
  },
  emphasis: {
    pattern: /('{2,5}).+?\1/,
    inside: {
      'bold-italic': {
        pattern: /(''''').+?(?=\1)/,
        lookbehind: !0,
        alias: ['bold', 'italic'],
      },
      bold: { pattern: /(''')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
      italic: { pattern: /('')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
      punctuation: /^''+|''+$/,
    },
  },
  hr: { pattern: /^-{4,}/m, alias: 'punctuation' },
  url: [
    /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,
    /\[\[.+?\]\]|\[.+?\]/,
  ],
  variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
  symbol: [/^#redirect/im, /~{3,5}/],
  'table-tag': {
    pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
    lookbehind: !0,
    inside: {
      'table-bar': { pattern: /\|$/, alias: 'punctuation' },
      rest: Prism.languages.markup.tag.inside,
    },
  },
  punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m,
})),
  Prism.languages.insertBefore('wiki', 'tag', {
    nowiki: {
      pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
      inside: {
        tag: {
          pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
          inside: Prism.languages.markup.tag.inside,
        },
      },
    },
  })
!(function (n) {
  ;(n.languages.xeora = n.languages.extend('markup', {
    constant: {
      pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
      inside: { punctuation: { pattern: /\$/ } },
    },
    variable: {
      pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
      inside: {
        punctuation: { pattern: /[$.]/ },
        operator: { pattern: /#+|[-+*~=^@]/ },
      },
    },
    'function-inline': {
      pattern:
        /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,
      inside: {
        variable: {
          pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
          inside: {
            punctuation: { pattern: /[,.|]/ },
            operator: { pattern: /#+|[-+*~=^@]/ },
          },
        },
        punctuation: { pattern: /\$\w:|[$:?.,|]/ },
      },
      alias: 'function',
    },
    'function-block': {
      pattern:
        /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,
      inside: { punctuation: { pattern: /[$:{}?.,|]/ } },
      alias: 'function',
    },
    'directive-inline': {
      pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,
      inside: {
        punctuation: {
          pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
          inside: { tag: { pattern: /#\d/ } },
        },
      },
      alias: 'function',
    },
    'directive-block-open': {
      pattern:
        /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,
      inside: {
        punctuation: {
          pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
          inside: { tag: { pattern: /#\d/ } },
        },
        attribute: {
          pattern: /![A-Z]+$/,
          inside: { punctuation: { pattern: /!/ } },
          alias: 'keyword',
        },
      },
      alias: 'function',
    },
    'directive-block-separator': {
      pattern: /\}:[-\w.]+:\{/,
      inside: { punctuation: { pattern: /[:{}]/ } },
      alias: 'function',
    },
    'directive-block-close': {
      pattern: /\}:[-\w.]+\$/,
      inside: { punctuation: { pattern: /[:{}$]/ } },
      alias: 'function',
    },
  })),
    n.languages.insertBefore(
      'inside',
      'punctuation',
      { variable: n.languages.xeora['function-inline'].inside.variable },
      n.languages.xeora['function-block']
    ),
    (n.languages.xeoracube = n.languages.xeora)
})(Prism)
Prism.languages.xojo = {
  comment: { pattern: /(?:'|\/\/|Rem\b).+/i, greedy: !0 },
  string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
  number: [/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
  directive: {
    pattern: /#(?:Else|ElseIf|Endif|If|Pragma)\b/i,
    alias: 'property',
  },
  keyword:
    /\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,
  operator:
    /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,
  punctuation: /[.,;:()]/,
}
!(function (e) {
  ;(e.languages.xquery = e.languages.extend('markup', {
    'xquery-comment': {
      pattern: /\(:[\s\S]*?:\)/,
      greedy: !0,
      alias: 'comment',
    },
    string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
    extension: { pattern: /\(#.+?#\)/, alias: 'symbol' },
    variable: /\$[-\w:]+/,
    axis: {
      pattern:
        /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
      lookbehind: !0,
      alias: 'operator',
    },
    'keyword-operator': {
      pattern:
        /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
      lookbehind: !0,
      alias: 'operator',
    },
    keyword: {
      pattern:
        /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
      lookbehind: !0,
    },
    function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
    'xquery-element': {
      pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
      lookbehind: !0,
      alias: 'tag',
    },
    'xquery-attribute': {
      pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
      lookbehind: !0,
      alias: 'attr-name',
    },
    builtin: {
      pattern:
        /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
      lookbehind: !0,
    },
    number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
    operator: [
      /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
      { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
    ],
    punctuation: /[[\](){},;:/]/,
  })),
    (e.languages.xquery.tag.pattern =
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/),
    (e.languages.xquery.tag.inside['attr-value'].pattern =
      /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/),
    (e.languages.xquery.tag.inside['attr-value'].inside.punctuation = /^="|"$/),
    (e.languages.xquery.tag.inside['attr-value'].inside.expression = {
      pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,
      inside: e.languages.xquery,
      alias: 'language-xquery',
    })
  var t = function (e) {
      return 'string' == typeof e
        ? e
        : 'string' == typeof e.content
        ? e.content
        : e.content.map(t).join('')
    },
    n = function (a) {
      for (var o = [], i = 0; i < a.length; i++) {
        var r = a[i],
          s = !1
        if (
          ('string' != typeof r &&
            ('tag' === r.type && r.content[0] && 'tag' === r.content[0].type
              ? '</' === r.content[0].content[0].content
                ? o.length > 0 &&
                  o[o.length - 1].tagName === t(r.content[0].content[1]) &&
                  o.pop()
                : '/>' === r.content[r.content.length - 1].content ||
                  o.push({
                    tagName: t(r.content[0].content[1]),
                    openedBraces: 0,
                  })
              : !(
                  o.length > 0 &&
                  'punctuation' === r.type &&
                  '{' === r.content
                ) ||
                (a[i + 1] &&
                  'punctuation' === a[i + 1].type &&
                  '{' === a[i + 1].content) ||
                (a[i - 1] &&
                  'plain-text' === a[i - 1].type &&
                  '{' === a[i - 1].content)
              ? o.length > 0 &&
                o[o.length - 1].openedBraces > 0 &&
                'punctuation' === r.type &&
                '}' === r.content
                ? o[o.length - 1].openedBraces--
                : 'comment' !== r.type && (s = !0)
              : o[o.length - 1].openedBraces++),
          (s || 'string' == typeof r) &&
            o.length > 0 &&
            0 === o[o.length - 1].openedBraces)
        ) {
          var l = t(r)
          i < a.length - 1 &&
            ('string' == typeof a[i + 1] || 'plain-text' === a[i + 1].type) &&
            ((l += t(a[i + 1])), a.splice(i + 1, 1)),
            i > 0 &&
              ('string' == typeof a[i - 1] || 'plain-text' === a[i - 1].type) &&
              ((l = t(a[i - 1]) + l), a.splice(i - 1, 1), i--),
            /^\s+$/.test(l)
              ? (a[i] = l)
              : (a[i] = new e.Token('plain-text', l, null, l))
        }
        r.content && 'string' != typeof r.content && n(r.content)
      }
    }
  e.hooks.add('after-tokenize', function (e) {
    'xquery' === e.language && n(e.tokens)
  })
})(Prism)
!(function (e) {
  function n(e) {
    return function () {
      return e
    }
  }
  var r =
      /\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,
    a = '\\b(?!' + r.source + ')(?!\\d)\\w+\\b',
    o = 'align\\s*\\((?:[^()]|\\([^()]*\\))*\\)',
    s =
      '(?!\\s)(?:!?\\s*(?:' +
      '(?:\\?|\\bpromise->|(?:\\[[^[\\]]*\\]|\\*(?!\\*)|\\*\\*)(?:\\s*<ALIGN>|\\s*const\\b|\\s*volatile\\b|\\s*allowzero\\b)*)'.replace(
        /<ALIGN>/g,
        n(o)
      ) +
      '\\s*)*' +
      '(?:\\bpromise\\b|(?:\\berror\\.)?<ID>(?:\\.<ID>)*(?!\\s+<ID>))'.replace(
        /<ID>/g,
        n(a)
      ) +
      ')+'
  ;(e.languages.zig = {
    comment: [{ pattern: /\/\/[/!].*/, alias: 'doc-comment' }, /\/{2}.*/],
    string: [
      {
        pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
        lookbehind: !0,
        greedy: !0,
      },
      {
        pattern: /([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,
        lookbehind: !0,
        greedy: !0,
      },
    ],
    char: {
      pattern:
        /(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
      lookbehind: !0,
      greedy: !0,
    },
    builtin: /\B@(?!\d)\w+(?=\s*\()/,
    label: {
      pattern:
        /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
      lookbehind: !0,
    },
    'class-name': [
      /\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,
      {
        pattern: RegExp(
          '(:\\s*)<TYPE>(?=\\s*(?:<ALIGN>\\s*)?[=;,)])|<TYPE>(?=\\s*(?:<ALIGN>\\s*)?\\{)'
            .replace(/<TYPE>/g, n(s))
            .replace(/<ALIGN>/g, n(o))
        ),
        lookbehind: !0,
        inside: null,
      },
      {
        pattern: RegExp(
          '(\\)\\s*)<TYPE>(?=\\s*(?:<ALIGN>\\s*)?;)'
            .replace(/<TYPE>/g, n(s))
            .replace(/<ALIGN>/g, n(o))
        ),
        lookbehind: !0,
        inside: null,
      },
    ],
    'builtin-type': {
      pattern:
        /\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,
      alias: 'keyword',
    },
    keyword: r,
    function: /\b(?!\d)\w+(?=\s*\()/,
    number:
      /\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,
    boolean: /\b(?:false|true)\b/,
    operator:
      /\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,
    punctuation: /[.:,;(){}[\]]/,
  }),
    e.languages.zig['class-name'].forEach(function (n) {
      null === n.inside && (n.inside = e.languages.zig)
    })
})(Prism)
