import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c,a as l,b as n,d as s,e,f as a}from"./app-dde11700.js";const p="/img/durl/hanhua.png",u="/img/durl/install.png",v="/img/durl/name-pass.png",m="/img/durl/cn.png",g="/img/durl/en.png",b="/img/durl/durl-demo.gif",h={},k=a(`<h2 id="_1-前言-需求" tabindex="-1"><a class="header-anchor" href="#_1-前言-需求" aria-hidden="true">#</a> <strong>1.前言 - 需求</strong></h2><p>咱们在使用AList时，复制的链接都是那么长，尤其是N层文件夹后，并且还是中文的情况下转码后，还有就是加密后更长啦</p><p>像下面这样,有中文转码了还更长啦~~复制发给小伙伴也很长</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们使用短连接将链接进行缩短，缩短后就是这样</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

⬇⬇⬇⬇⬇⬇⬇⬇使用短连接进行缩短⬇⬇⬇⬇⬇⬇⬇⬇

https://d.alist.org/sudu10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缩短后我们打开短连接会跳到开始的那个这样很方便</p><p>下面我们就开始说一下怎么搭建吧</p><br><h2 id="_2-开始" tabindex="-1"><a class="header-anchor" href="#_2-开始" aria-hidden="true">#</a> <strong>2.开始</strong></h2><h3 id="_2-1-准备" tabindex="-1"><a class="header-anchor" href="#_2-1-准备" aria-hidden="true">#</a> <strong>2.1 准备</strong></h3>`,11),_={href:"https://github.com/YOURLS/YOURLS",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/taozhiyu/yourls-translation-zh_CN",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.52pojie.cn/home.php?mod=space&uid=879080&do=profile&from=space",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"@52破解涛之雨",-1),R={href:"https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.aliyundrive.com/s/wCNVf6YgCL8",target:"_blank",rel:"noopener noreferrer"},L=n("li",null,[n("strong",null,"自用汉化"),s("：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 "),n("code",null,"Chrome"),s("浏览器用不了 360浏览器可以自己选择吧")],-1),y=a('<p>这个短连接也支持查看点击次数喔~</p><br><h3 id="_2-2-初始化" tabindex="-1"><a class="header-anchor" href="#_2-2-初始化" aria-hidden="true">#</a> <strong>2.2 初始化</strong></h3><p>短连接程序和汉化包已经准备好了，接下来我们就开始配置一下 <strong>YOURLS<sup>短连接程序</sup></strong> 和汉化包吧</p><h4 id="配置汉化包" tabindex="-1"><a class="header-anchor" href="#配置汉化包" aria-hidden="true">#</a> <strong>配置汉化包</strong></h4>',5),S=a('<figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h4 id="配置短连接程序配置文件" tabindex="-1"><a class="header-anchor" href="#配置短连接程序配置文件" aria-hidden="true">#</a> <strong>配置短连接程序配置文件</strong></h4><p>原生的配置文件里面是英文的现在进行了汉化</p><p>配置文件原来是叫 <strong><code>config-sample.php</code></strong>，我们<mark>需要手动</mark>修改为 <strong><code>config.php</code></strong></p><ul><li>自己修改前：<code>/user/config-sample.php</code></li><li>自己修改后：<code>/user/config.php</code></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">/* This is a sample config file.
 * Edit this file with your own settings and save it as &quot;config.php&quot;
 *
 * IMPORTANT: edit and save this file as plain ASCII text, using a text editor, for instance TextEdit on Mac OS or
 * Notepad on Windows. Make sure there is no character before the opening &lt;?php at the beginning of this file.
 */</span>

<span class="token comment">/*
 ** 仔细阅读MySQL设置-您可以从web主机获取此信息
 ** 用户配置是修改右侧内内容别改错咯~
 ** 例如 define( &#39;YOURLS_DB_USER&#39;, &#39;your db user name&#39; );
 ** 我们要修改的是 your db user name ==&gt; 改成我们的MySQL用户名
 */</span>

<span class="token doc-comment comment">/** 你的MySQL用户名 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DB_USER&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;your db user name&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 你的MySQL密码 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DB_PASS&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;your db password&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 你的数据库名
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DB_NAME&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;yourls&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** MySQL数据库主机.
 ** 如果使用非标准端口，请将其指定为&#39;主机名:端口&#39;例如&#39;localhost:9999&#39;或&#39;127.0.0.1:666&#39; */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DB_HOST&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;localhost&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** MySQL数据库表前缀
 ** YOURLS将使用此表前缀创建表（例如\`yourls_url\`,\`yourls_options\`等)
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] 
 ** 默认就行 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DB_PREFIX&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;yourls_&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 ** Site options
 */</span>

<span class="token doc-comment comment">/** YOURLS安装网站
 ** 全部小写，结尾没有斜杠。
 ** 如果要把它定义为&quot;http://sho.rt&quot;，不使用 &quot;http://www.sho.rt&quot;请不要在浏览器中使用www的二级域名（反之亦然）
 ** 要使用多语种域名（如http://你好.世界），请在此处写入其ascii格式 (如http://xn--6qq79v.xn--rhqv96g/) */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_SITE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://your-own-domain-here.com&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** YOURLS语言
 ** 更改此设置以使用语言的翻译文件，而不是使用默认的英语
 ** 翻译文件（.mo文件）必须导入在 user/language 目录中
 ** 可以查看 http://yourls.org/translations 了解更多信息 
 ** 汉化包推荐使用: https://github.com/taozhiyu/yourls-translation-zh_CN */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_LANG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;zh_CN&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 允许同一个长URL包含多个短URL
 ** 如果设置为true，则同一长链接，不能有多个短链接
 ** 设置为false则允许多个短链接指向同一个长链接 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_UNIQUE_URLS&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 私有意味着访问短链接后台需要登录
 ** 设置为false则用于公共用途
 ** 说人话就是是否允许所有人都可以生成短连接，默认是禁止的，设置成false
 ** 如果您不确定，请阅读http://yourls.org/privatepublic 了解更多 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_PRIVATE&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 用于加密cookies的随机密码，您不需要记住它，所以可以使它更复杂
 ** 提示：在 http://yourls.org/cookie 生成随机的密码*/</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_COOKIEKEY&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;modify this text with something random&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 允许访问后台的用户名和密码，密码可以是纯字符的，也可以是加密的散列
 ** YOURLS将自动加密此文件中的纯文本密码
 ** 阅读 http://yourls.org/userpassword 了解更多信息 */</span>
<span class="token variable">$yourls_user_passwords</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token comment">//下方的默认username建议删除自己新建一个</span>
	<span class="token comment">//&#39;username&#39; =&gt; &#39;password&#39;,</span>
	<span class="token string single-quoted-string">&#39;账号&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;密码&#39;</span>
	<span class="token comment">// &#39;username2&#39; =&gt; &#39;password2&#39;,</span>
	<span class="token comment">// You can have one or more &#39;login&#39;=&gt;&#39;password&#39; lines</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** URL缩短方法: 36 或 62
 ** 36: 生成所有小写字母数字组合 (如：13jkm)
 ** 62: 生成大小写混合的字母数字组合 (如：13jKm或13JKm) */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_URL_CONVERT&#39;</span><span class="token punctuation">,</span> <span class="token number">36</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 调试模式输出一些内部信息
 ** 默认值为false，编码时或提交新问题前启用 */</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;YOURLS_DEBUG&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* 保留关键字（设置后生成的随机URL将避开保留的关键字）
* 在这里可以设置一些负面的、不需要的或潜在误导性的关键字
*/</span>
<span class="token variable">$yourls_reserved_URL</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string single-quoted-string">&#39;porn&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;faggot&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;sex&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;nigger&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;fuck&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cunt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;dick&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/*
 ** Personal settings would go after here.
 */</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-3-正式安装" tabindex="-1"><a class="header-anchor" href="#_2-3-正式安装" aria-hidden="true">#</a> <strong>2.3 正式安装</strong></h3><p>上述提到的配置文件我们可以在本地修改好上传上去，也可以直接在服务器下载好然后在服务器修改，</p><p>（看自己怎么方便怎么来，我觉得还是在本地修改好在上传上去方便 哈哈~）</p><p>然后我们访问 <code>http(s)://您的域名/admin/install.php</code> ,点击“安装YOURLS”</p><p>安装好后点击管理员页面登录我们在配置文件写的帐号密码</p><div class="image-preview"><img src="`+u+'"><img src="'+v+`"></div><p>到这里已经安装好了，可以愉快的去使用啦</p><br><h2 id="_3-使用问题" tabindex="-1"><a class="header-anchor" href="#_3-使用问题" aria-hidden="true">#</a> <strong>3. 使用问题</strong></h2><h3 id="_3-1-访问短连接提示404" tabindex="-1"><a class="header-anchor" href="#_3-1-访问短连接提示404" aria-hidden="true">#</a> <strong>3.1 访问短连接提示404</strong></h3><details class="hint-container details"><summary>Nginx配置</summary><p>在Nginx配置里面最底下的 <code>}</code>结束前添加一条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># URL重写
location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>    access_log  /ect/xx/d.alist.org.log;
    error_log  /etc/xx/d.alist.org.error.log;
    location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加好后回去</p></details><details class="hint-container details"><summary>Apache配置</summary><p>Apache需要启用mod_rewrite模块，请创建.htaccess文件（注意区分安装路径）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#.htaccess 文件内容，如果是根目录下（如http://您的域名/）
# BEGIN YOURLS
&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /yourls-loader.php [L]
&lt;/IfModule&gt;
# END YOURLS
 
#如果是二级目录下（如：http://您的域名/somedir/）
# BEGIN YOURLS
&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteBase /somedir/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /somedir/yourls-loader.php [L]
&lt;/IfModule&gt;
# END YOURLS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-2-如何配置插件来分享alist" tabindex="-1"><a class="header-anchor" href="#_3-2-如何配置插件来分享alist" aria-hidden="true">#</a> <strong>3.2 如何配置插件来分享AList</strong></h3><p>插件我们下载下来，后添加到浏览器扩展，怎么添加可以查看下方的视频</p>`,22),x=n("code",null,"360，Chrome，Edge",-1),U={href:"https://youtu.be/PP6b0WSzYMc",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.aliyundrive.com/s/wCNVf6YgCL8",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,[n("p",null,[n("strong",null,"自用汉化"),s("：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 "),n("code",null,"Chrome"),s("浏览器用不了 360浏览器可以自己选择吧")])],-1),Y=n("p",null,[s("将插件添加到浏览器后，点击插件的 "),n("code",null,"设置|setting"),s("选项进行配置，")],-1),N=n("p",null,[s("第二个选项里面的签名是在 "),n("code",null,"http(s)://你的链接/admin/tools.php"),s(" 页面里面的"),n("code",null,"安全的API调用"),s(" 标题的往下数第三行里面有个参数复制一下填写")],-1),C=n("p",null,"大家看下面的图吧，一个是我自己汉化了的，一个是原生英文的",-1),I=n("div",{class:"image-preview"},[n("img",{src:m}),n("img",{src:g})],-1),F=a('<figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-使用这个短连接的一些说明" tabindex="-1"><a class="header-anchor" href="#_3-3-使用这个短连接的一些说明" aria-hidden="true">#</a> <strong>3.3 使用这个短连接的一些说明</strong></h3><ol><li>不推荐将所有人都可以生成短链接选项打开，防止别人使用你的短连接分发一些&quot;奇奇怪怪&quot;的东西去喝茶</li><li>建议打开 <strong><code>是否自动将结果复制到剪贴板? | Auto-copy result to clipboard?</code></strong> 这样我们点击插件后就不要手动去点copy了它会自动帮你复制你只需要去粘贴分享即可</li><li>记得在配置文件里面设置的帐号密码困难一些，防止别人登录</li><li>其实在链接右键会弹出的选项中也可以选择 <strong>YOURLS<sup>短连接程序</sup></strong> 插件,然后点击顶部的插件扩展栏就会进行缩短链接</li><li>其他的暂时没有了</li></ol><br><h2 id="_4-结语-结束" tabindex="-1"><a class="header-anchor" href="#_4-结语-结束" aria-hidden="true">#</a> <strong>4. 结语-结束</strong></h2><p>到这里就结束了，有兴趣的话大家去试试看吧，可能文字描述的不是很详细，视频版嘛 在路上了敬请期待吧，视频发了这里会进行修改</p>',6);function M(D,Q){const i=t("ExternalLinkIcon"),o=t("Badge");return d(),c("div",null,[l(" 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 "),l(" more "),k,n("ol",null,[n("li",null,[n("p",null,[s("短连接程序："),n("a",_,[s("https://github.com/YOURLS/YOURLS"),e(i)])])]),n("li",null,[n("p",null,[s("短连接汉化："),n("a",f,[s("https://github.com/taozhiyu/yourls-translation-zh_CN"),e(i)])]),n("ul",null,[n("li",null,[s("汉化是由 "),n("a",E,[w,e(i)]),s(" 提供")])])]),n("li",null,[n("p",null,[s("Web扩展插件："),n("a",R,[s("https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken"),e(i)])]),n("ul",null,[n("li",null,[s("本地备用："),n("a",B,[s("https://www.aliyundrive.com/s/wCNVf6YgCL8"),e(i)])]),L])])]),y,n("p",null,[s("我们只需要把汉化包里面的两个文件(*.mo *.po)移动到 已经下载好的YOURLS程序包里面的"),e(o,{text:"/user/languages",type:"danger",vertical:"middle"}),s(" 文件夹就行")]),S,n("p",null,[s("涵盖 "),x,s("三款浏览器："),n("a",U,[s("https://youtu.be/PP6b0WSzYMc"),e(i)]),s(" 只看怎么添加扩展插件即可")]),n("blockquote",null,[n("ul",null,[n("li",null,[n("p",null,[s("Web扩展插件："),n("a",q,[s("https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbookenopen in new window"),e(i)])]),n("ul",null,[n("li",null,[n("p",null,[s("本地备用："),n("a",O,[s("https://www.aliyundrive.com/s/wCNVf6YgCL8open in new window"),e(i)])])]),A])])])]),Y,N,C,I,s(" 这个配置好后，我们去试试看效果，下面的是我的一个Demo "),F])}const P=r(h,[["render",M],["__file","10-dlianjie.html.vue"]]);export{P as default};
