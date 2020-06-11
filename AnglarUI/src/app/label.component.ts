import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Languages } from "./Enum";
import { CourseService } from "./Services/courseService";
import { LabelDB } from "./Models/labelDB";
import { Observer, Observable } from 'rxjs';

@Component({
  selector: "label-lng",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() languageId: Languages = Languages.Turkish;
  @Input() id: string;
  @Input() isRequired: boolean = false;

  responseModel=new Observable<LabelDB>();
  
  constructor(private service: CourseService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.languageId) {  
      //this.text = this.service.GetLabelText(this.id, this.languageId);
      this.responseModel = this.service.GetValueOfText(this.id, this.languageId);        
    }
  }
}
