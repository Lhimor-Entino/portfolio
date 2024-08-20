import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/ui/avatar"
import { url } from "inspector"
interface Props { }
interface ResumeData{
    name: string;
    work_title: string;
    address:string
}

const data : ResumeData = { 
    name: "Romil Entino",
    work_title: "Software Developer",
    address:"Qeuzon City, Metro Manila"
}
const Resume = (props: Props) => {
    return (
        <div className='w-full flex justify-center'>

            <div className='w-2/4'>
                <div className="relative border-2" style={{height:"500px", backgroundImage : "url(https://assets.zety.com/blobcontent/pwb/background-images/SoftwareDeveloper/Template1/@x1/1920px.png)", backgroundRepeat: "no-repeat"}}>
                    <div className="absolute top-56 left-10 ">
                        <Avatar className="w-40 h-40  border-4 border-white ">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div>

                    <p>{data.name}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Resume