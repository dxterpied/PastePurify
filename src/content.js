(function () {
    window.addEventListener('paste', function(){
        var evt = event;
        
        /* allowed element names */
        var allowed_tags = [
            // HTML
            'a','abbr','acronym','address','area','article','aside','audio','b',
            'bdi','bdo','big','blink','blockquote','body','br','button','canvas',
            'caption','center','cite','code','col','colgroup','content','data',
            'datalist','dd','decorator','del','details','dfn','dir','div','dl','dt',
            'element','em','fieldset','figcaption','figure','font','footer','form',
            'h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i',
            'img','input','ins','kbd','label','legend','li','main','map','mark',
            'marquee','menu','menuitem','meter','nav','nobr','ol','optgroup',
            'option','output','p','pre','progress','q','rp','rt','ruby','s','samp',
            'section','select','shadow','small','source','spacer','span','strike',
            'strong','sub','summary','sup','table','tbody','td','template', 
            'textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var',
            'video','wbr',
            
            // SVG
            'svg','altglyph','altglyphdef','altglyphitem','animatecolor',
            'animatemotion','animatetransform','circle','clippath','defs','desc',
            'ellipse','font','g','glyph','glyphref','hkern','image','line',
            'lineargradient','marker','mask','metadata','mpath','path','pattern',
            'polygon','polyline','radialgradient','rect','stop','switch','symbol',
            'text','textpath','title','tref','tspan','view','vkern',
            
            //Text
            '#text'
        ];
        
        /* sanitize element we pasted into */
        setTimeout(function(){
            evt.target.innerHTML = DOMPurify.sanitize(
                evt.target.innerHTML,
                {
                    ALLOWED_TAGS: allowed_tags
                }    
            );
        },1);
    }, false);
})();
