import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/ui/avatar"
import { Button } from "@/Components/ui/button";
import { url } from "inspector"
import { BriefcaseIcon, FileSpreadsheetIcon, GraduationCapIcon, MapPinIcon, Phone, PhoneIcon, User2Icon } from "lucide-react";

interface Props { }
interface WorkHistory {
    position: string;
    company: string;
    start_date: string;
    end_date: string
}
interface Education {
    degree: string;
    field: string;
    school: string;
    address: string;
    start_date?: string;
    end_date: string
}
interface Skills {
    skill:string;
    percentage: string;
    description: string;

}
interface ResumeData {
    name: string;
    work_title: string;
    address: string;
    professional_experience: number;
    work_history: WorkHistory[];
    education: Education[];
    skills?: Skills[]
}


const data: ResumeData = {
    name: "Romil Entino",
    work_title: "Software Developer",
    address: "Qeuzon City, Metro Manila",
    professional_experience: 2,
    work_history: [{
        position: "Software Developer",
        company: "FPOSI",
        start_date: "2022-08-01",
        end_date: "Current"
    }],
    education: [{
        degree: "No Degree",
        field: "Software Development",
        school: "MICP",
        address: "Palo, Province Of Leyte, Philippines",
        start_date: "2019-03-15",
        end_date: "2020-03-15"
    },
    {
        degree: "NC II",
        field: "Computer System Servicing(CSS)",
        school: "Emeterio Federica Gerez National High School",
        address: "Brgy. San Agustin Babatngon, Leyte",
        end_date: "2020-03-15"
    }],
    // skills : [{

    // }]
}
const Resume = (props: Props) => {
    return (
        <div className='w-full flex justify-center  bg-gray-100 h-screen overflow-auto'>
            <div className="flex flex-col w-full items-center gap-y-10   ">

                {/* HEADER */}
                <div className='w-2/4 bg-white h-fit rounded-md pb-5' >
                    <div className="relative" style={{ height: "500px", backgroundImage: "url(https://assets.zety.com/blobcontent/pwb/background-images/SoftwareDeveloper/Template1/@x1/1920px.png)", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="absolute top-56 left-10  w-full">
                            <Avatar className="w-40 h-40  border-4 border-white ">
                                <AvatarImage src={`${route("img")}/profile.jpeg`} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col  mt-4" style={{ width: "90%" }}>

                                <p className="uppercase text-3xl font-bold text-slate-700">{data.name}</p>
                                <div className="flex justify-between mt-3 items-center">
                                    <div className="uppercase flex gap-2 items-center">
                                        <BriefcaseIcon className="text-slate-600" />
                                        <span className="text-sm  text-slate-700">{data.work_title}</span>
                                    </div>
                                    <div className="uppercase flex gap-2 items-center ">
                                        <MapPinIcon className="text-slate-600" />
                                        <span className="text-sm  text-slate-700">
                                            {data.address}
                                        </span>
                                    </div>
                                    <Button className=" rounded-3xl px-7">
                                        <PhoneIcon className="w-4 h-4 mr-2" />
                                        Contact Me
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* SUMMARY */}
                <div className="w-2/4" >
                    <div className="flex items-center text-2xl">
                        <User2Icon className="mr-3 w-6 h-6 text-slate-600" />
                        <p style={{ letterSpacing: ".2em" }} className="text-slate-700">Summary</p>
                    </div>
                    <div className='w-full bg-white h-fit p-5 px-10 py-7 text-justify text-slate-700 mt-10 rounded-md' >

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                {/* OVERVIEW */}
                <div className="w-2/4" >
                    <div className="flex items-center text-2xl">
                        <FileSpreadsheetIcon className="mr-3 w-6 h-6 text-slate-600" />
                        <p style={{ letterSpacing: ".2em" }} className="text-slate-700">Overview</p>
                    </div>
                    <div className='w-[500px] overflow-hidden relative flex  bg-white h-[200px] p-5 px-10 py-7 text-slate-700 mt-10 rounded-md' >


                        <div className="flex items-center ">
                            <p className="text-8xl font-semibold">{data.professional_experience}</p>
                            <div className="ml-4">
                                <p className="uppercase font-semibold">Years of professional </p>
                                <p className="uppercase font-semibold mt-3">experience</p>
                            </div>

                        </div>

                        <p className=" text-8xl absolute -top-5 font-extrabold text-gray-200 -right-8" style={{ fontSize: "15rem" }}>{data.professional_experience}</p>
                    </div>
                </div>


                {/* WORK HISTORY */}
                <div className="w-2/4" >
                    <div className="flex items-center text-2xl">
                        <BriefcaseIcon className="mr-3 w-6 h-6 text-slate-600" />
                        <p style={{ letterSpacing: ".2em" }} className="text-slate-700">Work History</p>
                    </div>
                    <div className='w-full overflow-hidden relative flex flex-col gap-y-10 text-slate-700 mt-10 rounded-md' >

                        {data.work_history.map((wh: WorkHistory, index: number) =>
                            <div className="flex gap-x-5  bg-white  p-5 px-10 py-7">
                                <div className="bg-slate-200 h-10 p-2" >
                                    <BriefcaseIcon />
                                </div>



                                <div className="flex flex-col gap-y-1">
                                    <p className=" font-semibold">{wh.position}</p>
                                    <p>{wh.company}</p>
                                    <p className="text-gray-400 text-sm">{wh.start_date}- {wh.end_date}</p>
                                </div>

                            </div>
                        )}


                    </div>
                </div>

                {/* EDUCATIONS HISTORY */}
                <div className="w-2/4" >
                    <div className="flex items-center text-2xl">
                        <GraduationCapIcon className="mr-3 w-6 h-6 text-slate-600" />
                        <p style={{ letterSpacing: ".2em" }} className="text-slate-700">EDUCATION</p>
                    </div>
                    <div className='w-full overflow-hidden relative flex flex-col gap-y-10 text-slate-700 mt-10 rounded-md' >

                        {data.education.map((e: Education, index: number) =>
                            <div className="flex gap-x-5  bg-white  p-5 px-10 py-7">
                                <div className="bg-slate-200 h-10 p-2" >
                                    <GraduationCapIcon />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <p className=" font-semibold">{e.degree} - {e.field}</p>
                                    <p>{e.school}</p>
                                    <p>{e.address}</p>
                                    <p className="text-gray-400 text-sm"> {e.start_date ? e.start_date + " to" : ""} {e.end_date}</p>
                                </div>
                            </div>
                        )}


                    </div>
                </div>


                {/* SKILLS */}
                <div className="w-2/4" >

                </div>
            </div>

        </div>
    )
}

export default Resume