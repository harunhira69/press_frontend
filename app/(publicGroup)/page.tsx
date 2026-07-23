import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";


export default  async function  HomePage (){
    console.log("Home Page");


    const user = await getMe();

    console.log(user)

return(
    
    <div>
        Hello next js

        <Button
        size={"sm"}
        variant={"default"}
        >Click Me</Button>
    </div>

)

}