<template>
<Card>
            <p slot="title">
                <Icon type="person"></Icon>
                个人信息
            </p>
            <div>
                <Form 
                    ref="userForm"
                    :model="fromControl" 
                    :label-width="100" 
                    label-position="right"
                >
                    <FormItem label="用户姓名：" prop="username">
                        <div style="display:inline-block;width:300px;">
                            <Input v-model="fromControl.username"></Input>
                        </div>
                    </FormItem>
                     <FormItem label="用户密码：" prop="password">
                        <div style="display:inline-block;width:300px;">
                            <Input v-model="fromControl.password"></Input>
                        </div>
                    </FormItem>
                    <FormItem label="用户手机：" prop="ipone" >
                        <div style="display:inline-block;width:204px;">
                            <Input v-model="fromControl.ipone"></Input>
                        </div>
                    </FormItem>
                    <FormItem label="是否启用：" prop="enable" >
                        <div style="display:inline-block;width:204px;">
                             <RadioGroup v-model="fromControl.enable">
                                <Radio label="1">是</Radio>
                                <Radio label="0">否</Radio>
                            </RadioGroup>
                        </div>
                    </FormItem>
                     <FormItem label="描述：" prop="description" >
                        <div style="display:inline-block;width:204px;">
                            <Input v-model="fromControl.description"></Input>
                        </div>
                    </FormItem>
                    <div>
                        <Button type="text" style="width: 100px;" >取消</Button>
                        <Button type="primary" style="width: 100px;" @click="submitHandle" >保存</Button>
                    </div>
                </Form>
            </div>
        </Card>
</template>
<script>
import ajax from '@/libs/ajax'
export default {
  data(){
      return {
          fromControl:{
              username:'',
              password:'',
              enable:'',
              description:'',
              ipone:''
          },
          enableList:[{key:'1',value:'是'},{key:'0',value:'否'}]
      }
  },
  methods:{
    submitHandle(){
        ajax.post("/authentication/user/save",this.fromControl).then(res=>{
            
        }).catch(res=>{

        })
        console.log(this.fromControl);
    }
  },
  created(){
   
  }
}
</script>

