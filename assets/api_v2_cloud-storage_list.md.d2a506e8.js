import{_ as s,c as a,o as e,a as n}from"./app.e5bca581.js";const D=JSON.parse('{"title":"Cloud Storage List","description":"","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Method And Path","slug":"method-and-path"},{"level":2,"title":"Request","slug":"request"},{"level":3,"title":"Header","slug":"header"},{"level":3,"title":"Body","slug":"body"},{"level":2,"title":"Response","slug":"response"},{"level":3,"title":"Success","slug":"success"},{"level":3,"title":"Failed","slug":"failed"}],"relativePath":"api/v2/cloud-storage/list.md"}'),l={name:"api/v2/cloud-storage/list.md"},o=n(`<h1 id="cloud-storage-list" tabindex="-1">Cloud Storage List <a class="header-anchor" href="#cloud-storage-list" aria-hidden="true">#</a></h1><p>\u{1F511} Need JWT Authorization</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>List cloud storage file and directory</p><h2 id="method-and-path" tabindex="-1">Method And Path <a class="header-anchor" href="#method-and-path" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">POST </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">v2</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">list</span></span>
<span class="line"></span></code></pre></div><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h2><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-request-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-session-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">directoryPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ASC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DESC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-hidden="true">#</a></h4><ul><li>minimum: <code>1</code></li><li>maximum: <code>50</code></li></ul><h4 id="directorypath" tabindex="-1">directoryPath <a class="header-anchor" href="#directorypath" aria-hidden="true">#</a></h4><p>Path to the folder to be viewed</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>300</code></li><li>format: <a href="/misc/ajv-formats/directory-path.html">directory-path</a></li></ul><h4 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h4><p>Number of displays per page</p><ul><li>default: <code>50</code></li><li>minimum: <code>1</code></li><li>maximum: <code>50</code></li></ul><h4 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-hidden="true">#</a></h4><p>Sort by file creation time</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>directories are always at the top</p></div><ul><li>enum: <code>ASC | DESC</code></li><li>default: <code>ASC</code></li></ul><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><h3 id="success" tabindex="-1">Success <a class="header-anchor" href="#success" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">totalUsage</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">items</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#F07178;">            fileUUID</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            fileName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            fileSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            fileURL</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            resourceType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">FileResourceType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            createAt</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            meta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                whiteboardConvert</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">WhiteboardConvertPayload</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                whiteboardProjector</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">WhiteboardProjectorPayload</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}&gt;;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">canCreateDirectory</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a>, <a href="/types/file-payload.html">WhiteboardConvertPayload</a>, <a href="/types/file-payload.html">WhiteboardProjectorPayload</a>, <a href="/types/file-resource-type.html">FileResourceType</a></p><h4 id="totalusage" tabindex="-1">totalUsage <a class="header-anchor" href="#totalusage" aria-hidden="true">#</a></h4><p>Total usage of current users</p><h4 id="items-fileuuid" tabindex="-1">items[].fileUUID <a class="header-anchor" href="#items-fileuuid" aria-hidden="true">#</a></h4><p>UUID of the current document</p><h4 id="items-filename" tabindex="-1">items[].fileName <a class="header-anchor" href="#items-filename" aria-hidden="true">#</a></h4><p>Current file name</p><h4 id="items-filesize" tabindex="-1">items[].fileSize <a class="header-anchor" href="#items-filesize" aria-hidden="true">#</a></h4><p>Only the following file categories exist with file sizes</p><ul><li><a href="/types/file-resource-type.html#WhiteboardConvert">FileResourceType.WhiteboardConvert</a></li><li><a href="/types/file-resource-type.html#WhiteboardProjector">FileResourceType.WhiteboardProjector</a></li><li><a href="/types/file-resource-type.html#NormalResources">FileResourceType.NormalResources</a></li></ul><p>For other categories, this value is <code>0</code></p><h4 id="items-fileurl" tabindex="-1">items[].fileURL <a class="header-anchor" href="#items-fileurl" aria-hidden="true">#</a></h4><p>When <a href="/types/file-resource-type.html#Directory">FileResourceType.Directory</a>, this value is a meaningless string and can be ignored</p><h4 id="items-createat" tabindex="-1">items[].createAt <a class="header-anchor" href="#items-createat" aria-hidden="true">#</a></h4><p>Creation time of the document</p><h4 id="items-resourcetype" tabindex="-1">items[].resourceType <a class="header-anchor" href="#items-resourcetype" aria-hidden="true">#</a></h4><p>For more information: <a href="/types/file-resource-type.html">FileResourceType</a></p><h4 id="items-meta-whiteboardconvert" tabindex="-1">items[].meta?.whiteboardConvert <a class="header-anchor" href="#items-meta-whiteboardconvert" aria-hidden="true">#</a></h4><p>For more information: <a href="/types/file-payload.html">WhiteboardConvertPayload</a></p><h4 id="items-meta-whiteboardprojector" tabindex="-1">items[].meta?.whiteboardProjector <a class="header-anchor" href="#items-meta-whiteboardprojector" aria-hidden="true">#</a></h4><p>For more information: <a href="/types/file-payload.html">WhiteboardProjectorPayload</a></p><h4 id="cancreatedirectory" tabindex="-1">canCreateDirectory <a class="header-anchor" href="#cancreatedirectory" aria-hidden="true">#</a></h4><p>Is it possible to continue creating new directories in the current directory</p><h3 id="failed" tabindex="-1">Failed <a class="header-anchor" href="#failed" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Failed</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ErrorCode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a>, <a href="/types/error-code.html">ErrorCode</a></p>`,54),t=[o];function p(r,c,i,d,F,h){return e(),a("div",null,t)}const u=s(l,[["render",p]]);export{D as __pageData,u as default};
