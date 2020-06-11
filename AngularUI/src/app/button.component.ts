import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
import { Observable } from 'rxjs';
import { LabelDB } from './Models/labelDB';
@Component({
    selector: 'button-lng',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;
    @Input() css: string = "";
    @Input() width: string = "";
    @Output() click = new EventEmitter();

    responseModel=new Observable<LabelDB>();
    
    constructor(private service: CourseService) { }
 
    ngOnChanges(changes: SimpleChanges) {
        if (changes.languageId) {       
            this.responseModel = this.service.GetValueOfText(this.id, this.languageId);  
        }
    }
    reverseBack()
    {
        this.click.emit();
    }
}