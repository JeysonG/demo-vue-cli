<template lang="pug">

    li.artist
        h2 {{artist.name}}
        
        #picture
            a(:href="artist.url" target="_blank"): img(:src="artist.image[2]['#text']")

</template>

<script>

export default {
    name: 'artist',
    props: ['artist']
}

</script>

<style lang="stylus" scoped>

    li.artist
        // display block
        margin 10px 0

    #picture
        width 300px
</style>
