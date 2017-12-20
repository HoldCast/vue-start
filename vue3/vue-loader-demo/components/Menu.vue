<template>
	<ul>
		<li>111</li>
		<li>111</li>
		<li @click="change">{{{msg}}}</li>
	</ul>
</template>
<script>
    export default{
        data(){
            return {
                msg:'change'
            }
        },
        methods:{
            change(){
                this.msg += '<i>wahaha</i>';
            }
        }
    }
</script>