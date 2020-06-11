import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
import { Observable } from 'rxjs';
import { LabelDB } from './Models/labelDB';
@Component({
    selector: 'buttonSubmit-lng',
    templateUrl: './buttonsubmit.component.html',
    styleUrls: ['./buttonsubmit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSubmitComponent {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;
    @Input() css: string = "";
    @Input() disabled: boolean = true;    

    responseModel=new Observable<LabelDB>();

    constructor(private service: CourseService) { }
   
    ngOnChanges(changes: SimpleChanges) {
        if (changes.languageId) {
            this.responseModel = this.service.GetValueOfText(this.id, this.languageId);
        }
    }
}