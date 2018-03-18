<template>
<Card>
            <p slot="title">
                <Icon type="person"></Icon>
                个人信息
            </p>
            <div>
                <Form 
                    ref="userForm"
                    :model="userForm" 
                    :label-width="100" 
                    label-position="right"
                    :rules="inforValidate"
                >
                    <FormItem label="用户姓名：" prop="name">
                        <div style="display:inline-block;width:300px;">
                            <Input></Input>
                        </div>
                    </FormItem>
                    <FormItem label="用户手机：" prop="cellphone" >
                        <div style="display:inline-block;width:204px;">
                            <Input @on-keydown="hasChangePhone"></Input>
                        </div>
                    </FormItem>
                    <FormItem label="用户手机：" prop="cellphone" >
                        <div style="display:inline-block;width:204px;">
                            <RadioGroup type="button">
                              <Radio label="北京"></Radio>
                              <Radio label="上海"></Radio>
                              <Radio label="深圳"></Radio>
                              <Radio label="杭州"></Radio>
                          </RadioGroup>
                        </div>
                    </FormItem>
                    <div>
                        <Button type="text" style="width: 100px;" >取消</Button>
                        <Button type="primary" style="width: 100px;" >保存</Button>
                    </div>
                </Form>
            </div>
        </Card>
</template>
<script>
import ajax from '@/libs/ajax'
export default {
  created(){
    ajax.get("/authentication/user/test").then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

