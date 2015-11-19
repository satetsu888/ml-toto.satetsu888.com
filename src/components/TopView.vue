<template>
    <h3>最新の予想をみる</h3>
    <li>
        <a v-link="{path: '/latest'}">第{{lastround}}回toto予想</a>
    </li>
    <h3>過去の予想と結果をみる</h3>
    <li v-for="round in pastrounds">
        <a v-link="'/past/'+round">第{{round}}回toto予想結果</a>
    </li>
<li>
    <a v-link="{path: '/about'}">このサイトについて</a>
</li>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ml-toto -->
<ins class="adsbygoogle"
     style="display:inline-block;width:320px;height:100px"
     data-ad-client="ca-pub-5556257550558549"
     data-ad-slot="1012272705"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

</template>

<script>
module.exports = {
    data: function(){
        return {
            lastround:"",
            pastrounds:[]
        }
    },
    ready: function() {
        this.$http.get('./result/meta.json', function (data, status, request) {
            this.$set('lastround', data.lastround);
            this.$set('pastrounds', data.pastrounds);
        });
    }
}
</script>
