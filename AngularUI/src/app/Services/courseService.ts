import { Injectable } from "@angular/core";
import { Course } from "../Models/course";
import { ColumnDefs } from "../Models/columnDef";
import { HttpClient } from "@angular/common/http";
import { Languages } from "../Enum";
import { LabelDB } from "../Models/labelDB";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  public baseUrl: string = "http://localhost:1923/api"; /*Deno Cors Open*/
  /* public baseUrl: string = "/api/getKey/"; */
  /*With Proxy Use "npm start" */
  constructor(private httpClient: HttpClient) {}
  /*labelDB: LabelDB[] = [
    new LabelDB("courseName", "Kurs Adı", Languages.Turkish),
    new LabelDB("courseName", "Course Name", Languages.English),
    new LabelDB("price", "Kurs Fiyat", Languages.Turkish),
    new LabelDB("price", "Course Price", Languages.English),
    new LabelDB("hours", "Kurs Süresi", Languages.Turkish),
    new LabelDB("hours", "Course Totla Hours", Languages.English),
  ];

  errorMessage: LabelDB[] = [
    new LabelDB("nameRequried", "İsim Alanı Zorunludur!", Languages.Turkish),
    new LabelDB("nameRequried", "Name Field Required!", Languages.English),
    new LabelDB("priceRequried", "Fiyat Alanı Zorunludur!", Languages.Turkish),
    new LabelDB("priceRequried", "Price Field Required!", Languages.English),
    new LabelDB(
      "timeRequried",
      "Toplam Süre Alanı Zorunludur!",
      Languages.Turkish,
    ),
    new LabelDB(
      "timeRequried",
      "Total Hours Field Required!",
      Languages.English,
    ),
    new LabelDB("openCourse", "Açılacak Kurslar", Languages.Turkish),
    new LabelDB("openCourse", "Open Courses", Languages.English),
    new LabelDB(
      "courseDescription",
      "Herbir açılacak kursun Adı, Fiyatı ve Süresi zorunludur:",
      Languages.Turkish,
    ),
    new LabelDB(
      "courseDescription",
      "Name, Price and Duration of each course to be opened is mandatory:",
      Languages.English,
    ),
  ];

  buttonText: LabelDB[] = [
    new LabelDB("btnSave", "Kaydet", Languages.Turkish),
    new LabelDB("btnSave", "Save", Languages.English),
    new LabelDB("btnReverse", "Geri Al", Languages.Turkish),
    new LabelDB("btnReverse", "Reverse Back", Languages.English),
  ];
*/
  public GetCourseData() {
    let courseList: Course[];
    courseList = [
      new Course("Angular", 2400, 36, 1),
      new Course(".Net Core", 4000, 200, 2),
      new Course("Microservice", 2000, 20, 3),
      new Course("Azure", 1500, 15, 4),
    ];

    return courseList;
  }
/*
  public GetColumnDefData(languageID: Languages = Languages.Turkish) {
    let columnDefList: ColumnDefs[];
    switch (languageID) {
      case Languages.Turkish:
        columnDefList = [
          new ColumnDefs("Kurs Adı", "Name"),
          new ColumnDefs("Kurs Fiyat", "Price"),
          new ColumnDefs("Kurs Süresi", "TotalHours"),
          new ColumnDefs("Id", "Id"),
        ];
        break;
      case Languages.English:
        columnDefList = [
          new ColumnDefs("Course Name", "Name"),
          new ColumnDefs("Course Price", "Price"),
          new ColumnDefs("Total Hours", "TotalHours"),
          new ColumnDefs("Id", "Id"),
        ];
        break;
    }
    return columnDefList;
  }
   public GetLabelText(key: string, languageID: Languages = Languages.Turkish): string {
        if (this.labelDB.filter(lbl => lbl.key == key && lbl.languageID == languageID).length > 0) {
            return this.labelDB.filter(lbl => lbl.key == key && lbl.languageID == languageID)[0].value;
        }
    } 

  public GetErrortext(
    key: string,
    languageID: Languages = Languages.Turkish,
  ): string {
    if (
      this.errorMessage.filter((txt) =>
        txt.key == key && txt.languageID == languageID
      ).length > 0
    ) {
      return this.errorMessage.filter((txt) =>
        txt.key == key && txt.languageID == languageID
      )[0].value;
    }
  }

  public GetButtonText(
    key: string,
    languageID: Languages = Languages.Turkish,
  ): string {
    if (
      this.buttonText.filter((btn) =>
        btn.key == key && btn.languageID == languageID
      ).length > 0
    ) {
      return this.buttonText.filter((btn) =>
        btn.key == key && btn.languageID == languageID
      )[0].value;
    }
  }
*/
  public GetValueOfText(key: string,languageID: Languages = Languages.Turkish): Observable<LabelDB> {
    let url: string = this.baseUrl + "/getKey/" + languageID + "/" + key;
    return this.httpClient.get<LabelDB>(url);
  }

  public GetColumnOfGridText(key: string,languageID: Languages = Languages.Turkish): Observable<ColumnDefs[]> { 
    let url: string = this.baseUrl + "/getGridKeys/" + languageID + "/" + key;
    return this.httpClient.get<ColumnDefs[]>(url)
  }
}
