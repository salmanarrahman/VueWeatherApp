
<template>
    <p>{{ setCity }}</p>
    <p>{{ searchText }}</p>
    
</template>
<script>

    export default {
        data() {
    return {
        searchText: null,
    };
    },
    computed:{
        setCity () {
            this.searchText = this.$route.params.name;
            return this.$route.params.name;
        }
    }
    
    

};

</script>
