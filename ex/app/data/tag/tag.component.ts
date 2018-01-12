import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTagComponent {
  
  code: string[] = code
  tags: string[] = ['123', '234234', '0011']
  page: any = {
    previous: { name: 'Form 表单', link: '/form/form' },
    next: { name: 'Progress 输入框', link: '/data/progress' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
}
