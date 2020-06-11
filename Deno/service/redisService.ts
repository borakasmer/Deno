import { Languages } from "../models/enum.ts";
import { redis } from "./redis.ts";

export const setRedis = async ()=> {
    const courseName = await redis.set(`${Languages.Turkish}-courseName`, "Kurs Adı");  
    const courseName1 = await redis.set(`${Languages.English}-courseName`, "Course Name");    
    const price = await redis.set(`${Languages.English}-price`, "Course Price");  
    const price1 = await redis.set(`${Languages.Turkish}-price`, "Kurs Fiyat");  
    const hours = await redis.set(`${Languages.English}-hours`, "Course Totla Hours");  
    const hours1 = await redis.set(`${Languages.Turkish}-hours`, "Kurs Süresi"); 
    
    const nameRequried = await redis.set(`${Languages.Turkish}-nameRequried`, "İsim Alanı Zorunludur!"); 
    const nameRequried1 = await redis.set(`${Languages.English}-nameRequried`, "Name Field Required!"); 
    const priceRequried = await redis.set(`${Languages.Turkish}-priceRequried`, "Fiyat Alanı Zorunludur!"); 
    const priceRequried1 = await redis.set(`${Languages.English}-priceRequried`, "Price Field Required!"); 
    const timeRequried = await redis.set(`${Languages.Turkish}-timeRequried`, "Toplam Süre Alanı Zorunludur!"); 
    const timeRequried1 = await redis.set(`${Languages.English}-timeRequried`, "Total Hours Field Required!"); 
    const openCourse = await redis.set(`${Languages.Turkish}-openCourse`, "Açılacak Kurslar"); 
    const openCourse1 = await redis.set(`${Languages.English}-openCourse`, "Open Courses"); 
    const courseDescription = await redis.set(`${Languages.Turkish}-courseDescription`, "Herbir açılacak kursun Adı, Fiyatı ve Süresi zorunludur:"); 
    const courseDescription1 = await redis.set(`${Languages.English}-courseDescription`, "Name, Price and Duration of each course to be opened is mandatory:"); 

    const btnSave = await redis.set(`${Languages.Turkish}-btnSave`, "Kaydet"); 
    const btnSave1 = await redis.set(`${Languages.English}-btnSave`, "Save");  
    const btnReverse = await redis.set(`${Languages.Turkish}-btnReverse`, "Geri Al"); 
    const btnReverse1 = await redis.set(`${Languages.English}-btnReverse`, "Reverse Back");

    const grid= await redis.hset(`${Languages.Turkish}-grid`, "Name","Kurs Adı",
    "Price","Kurs Fiyat","TotalHours","Kurs Süresi","Id", "Id");
    const grid1= await redis.hset(`${Languages.English}-grid`, "Name","Course Name",
    "Price","Course Price","TotalHours","Total Hours","Id", "Id");

    return "All the Key Inserted";
};
