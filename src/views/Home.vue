<template>
    <div>
        <h1>Welcome to {{title_2}}</h1>
        <!-- v-model : 데이터를 바인딩한다. -->
        <input type="text" v-model="input_1" />
         <button type="button" @click="setDate">Set</button>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="set_console">시간console</button>

        <br />
        <select class="form" v-model="year" @change="select_change">
            <!-- :를 사용하면 데이터에 직접 접근이 가능 -->
            <!-- v-for : for문을 돎. ()에서 첫 번째로 쓰이는 게 돌아서 가져오는 data, i는 도는 순번 -->
            <option :key="i" :value="data.v" v-for="(data, i) in options">{{data.t}}</option>
        </select>

        <br />
        <table class="table" v-if="tableShow">
            <!-- v-if : if문. 조건에 충족하지 않으면 렌더링조차 안 함-->
            <!-- v-show : 조건에 충족하지 않아도 렌더링은 함. display:none;같은 존재 -->
            <tr :key="i" v-for="(data, i) in options">
                <td>{{data.v}}</td>
                <td>{{data.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title_1 : "Home!",
            title_2 : "test page!",
            input_1 : "name",
            options : [
                {v:"T", t:"2021"},
                {v:"M", t:"2022"},
                {v:"S", t:"2023"}
            ],
            year : "M",
            tableShow : true
        };
    },
    name : "home",
    methods : {
        getData(){
            alert(this.input_1);
        },
        setDate(){
            this.input_1 = "mood";
        },
        set_console(){
            var time = new Date();
            console.log(time);
        },
        select_change(){
            alert(this.year);
        }
    },

    watch : { //감시하고 싶은 data이름 그대로 함수명으로 입력 == 해당 data 실시간 감시
        input_1(){
            console.log(this.input_1);
        }
    },

     /** ↓↓↓기본 로직 확인한 것↓↓↓ */
     /**
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
     console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }
    */
}
</script>