new Vue({
    el: '#app',
    data: {
        output: '0',
        last_operation: 'none'
    },
    methods: {
        add: function(){
            this.output = (this.output).concat('+')
        },
        substract: function(){
            this.output = (this.output).concat('-')
        },
        divide: function(){
            this.output = (this.output).concat('/')
        },
        multiply: function(){
            this.output = (this.output).concat('*')
        },
        number: function(value){
            if (this.last_operation === "equal"){
                this.output = value.toString()
                this.last_operation = "none"
                return
            }
            if (this.output === "0"){
                this.output = value.toString()
            }
            else{
                this.output = (this.output).concat(value.toString())
            }
        },
        dot: function(){
            this.output = (this.output).concat('.')
        },
        ac: function(){
            this.output = '0'
        },
        equal: function(){
            this.output = (eval(this.output)).toString()
            this.last_operation = 'equal'
        }
    }

})