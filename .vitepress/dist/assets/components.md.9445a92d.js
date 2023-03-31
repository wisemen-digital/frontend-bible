import{_ as e,c as s,o as a,N as n}from"./chunks/framework.0799945b.js";const y=JSON.parse('{"title":"Writing components for dummies","description":"","frontmatter":{},"headers":[],"relativePath":"components.md"}'),o={name:"components.md"},t=n(`<h1 id="writing-components-for-dummies" tabindex="-1">Writing components for dummies <a class="header-anchor" href="#writing-components-for-dummies" aria-label="Permalink to &quot;Writing components for dummies&quot;">​</a></h1><p>Components are the building blocks of your application. They are the most important part of your application and should be written with care.</p><h3 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h3><ul><li><a href="#naming-conventions">Naming conventions</a></li><li><a href="#structure">Structure</a></li><li><a href="#smart-vs-dumb-components">Smart vs Dumb components</a></li><li><a href="./components/components-props.html">Props</a></li><li><a href="./components/components-emits.html">Emits</a></li><li><a href="./components/components-slots.html">Slots</a></li></ul><h2 id="naming-conventions" tabindex="-1">Naming conventions <a class="header-anchor" href="#naming-conventions" aria-label="Permalink to &quot;Naming conventions&quot;">​</a></h2><p>When naming your components, you should always follow these conventions.</p><h3 id="_1-use-pascalcase" tabindex="-1">1. Use PascalCase <a class="header-anchor" href="#_1-use-pascalcase" aria-label="Permalink to &quot;1. Use PascalCase&quot;">​</a></h3><p>Use PascalCase for naming your components. This will make it easier to read and will prevent conflicts with HTML elements.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ExampleComponent</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-use-long-names" tabindex="-1">2. Use long names <a class="header-anchor" href="#_2-use-long-names" aria-label="Permalink to &quot;2. Use long names&quot;">​</a></h3><p>Use long names for your components. This will make it easier to understand what the component is for.</p><blockquote><p>A good practice is to follow your folder structure. This will make it easier to find the component you are looking for.</p></blockquote><p>Example:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">EmployeeDetailEmploymentView</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-use-the-component-type-as-a-suffix" tabindex="-1">3. Use the component type as a suffix <a class="header-anchor" href="#_3-use-the-component-type-as-a-suffix" aria-label="Permalink to &quot;3. Use the component type as a suffix&quot;">​</a></h3><p>Use the component type as a suffix. This will make it easier to understand what the component is for.</p><p>Example:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormDropdown</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormCurrencyInput</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormSelectButton</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-prefix-with-the-module-name" tabindex="-1">4. Prefix with the module name <a class="header-anchor" href="#_4-prefix-with-the-module-name" aria-label="Permalink to &quot;4. Prefix with the module name&quot;">​</a></h3><p>Use the folder or module name to prefix your component. This is especially useful when creating a library of components.</p><p>Example:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">AppButton</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">AppGrid</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormDropdown</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">FormCurrencyInput</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h2><p>When writing components, you should always follow this structure.</p><ol><li>Imports <code>import { defineProps, defineEmits } from &#39;vue&#39;;</code></li><li>Props <code>const props = defineProps&lt;{value: Person}&gt;();</code></li><li>Emits <code>const emit = defineEmits&lt;{(e: &#39;change&#39;, value: Person)}&gt;();</code></li><li>Composable <code>const { isLoading } = useLoading()</code></li><li>Refs <code>const isLoading = ref&lt;boolean&gt;(false)</code></li><li>Computed properties <code>const isLoading = computed&lt;boolean&gt;(() =&gt; {})</code></li><li>Methods <code>initForm() {}</code></li><li>Lifecycle hooks <code>onMounted(() =&gt; {})</code></li><li>defineExpose <code>defineExpose({})</code></li><li>Template <code>&lt;template&gt;</code></li><li>Styles <code>&lt;style scoped&gt;</code></li></ol><h2 id="smart-vs-dumb-components" tabindex="-1">Smart vs Dumb components <a class="header-anchor" href="#smart-vs-dumb-components" aria-label="Permalink to &quot;Smart vs Dumb components&quot;">​</a></h2><blockquote><p>When writing components, you should always try to split them into smart and dumb components. This will make your components easier to understand and maintain when adding or changing functionality.</p></blockquote><h3 id="smart-components-container" tabindex="-1">Smart components (container) <a class="header-anchor" href="#smart-components-container" aria-label="Permalink to &quot;Smart components (container)&quot;">​</a></h3><p>Smart components are usually the &quot;views&quot; of your application and are rendered by the router. They are responsible for handling user interaction and passing data to dumb components.</p><ul><li>Imports all of your stores, router, services, ...</li><li>Contain heavy business logic</li><li>Contain little to no presentation logic in their template</li><li>Are focused on passing data to dumb components</li><li>Are focused on handling emits from dumb components</li></ul><h3 id="dumb-components-presentational" tabindex="-1">Dumb components (presentational) <a class="header-anchor" href="#dumb-components-presentational" aria-label="Permalink to &quot;Dumb components (presentational)&quot;">​</a></h3><p>Dumb components are usually rendered by smart components. They are responsible for rendering data and emitting events.</p><ul><li>Pure input &amp; output (props &amp; emits)</li><li>Never contain any import of a router, store, service, ... <ul><li>This will prevent them from being dependent on the context they are used in</li><li>This will make them easier to test, reuse and understand</li></ul></li><li>Are focused on rendering data, handling user interaction and emitting events</li></ul><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><p>Props are the input of a component. They are used to pass data to the component. These props are immutable and can&#39;t be changed by the component itself (unless you configure them as model props).</p><p><a href="./components/components-props.html">Read more about props</a></p><h3 id="emits" tabindex="-1">Emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;Emits&quot;">​</a></h3><p>Emits are the output of a component. They are used to pass data from the component to the parent. These emits are immutable and can&#39;t be changed by the component itself.</p><p><a href="./components/components-emits.html">Read more about emits</a></p><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><p>Slots are used to pass content to a component. This content can be anything, from text to other components.</p><p><a href="./components/components-slots.html">Read more about slots</a></p><h3 id="html-tags" tabindex="-1">HTML tags <a class="header-anchor" href="#html-tags" aria-label="Permalink to &quot;HTML tags&quot;">​</a></h3><ul><li><code>&lt;section&gt;This is used as a wrapper for big pieces of code&lt;/section&gt;</code></li><li><code>&lt;article&gt;This is used as a wrapper for a single item in a section&lt;/article&gt;</code></li><li>h1, h2, h3,</li><li><code>&lt;p&gt;This is used for text and paragraphs&lt;/p&gt;</code></li><li><code>&lt;span&gt;Text&lt;/span&gt;</code></li><li><code>&lt;a href=&#39;www.usemeforlinks.please&#39;&gt;</code></li></ul>`,44),l=[t];function p(i,r,c,m,d,u){return a(),s("div",null,l)}const f=e(o,[["render",p]]);export{y as __pageData,f as default};
