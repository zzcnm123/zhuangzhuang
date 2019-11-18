<template>
    <div id="main">
        <Header title="壮壮影院"></Header>
        <div id="content">
            <CinemaList></CinemaList>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CinemaList from '@/components/CinemaList'
export default{
    name:'Cinema',
    components:{
        Header,
        TabBar,
        CinemaList
    }
}
</script>


<style scoped>

</style>