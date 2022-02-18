import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @Input() content: string;
  @Input() limit: number;
  @Input() completeWords: boolean;

  isContentToggled: boolean;
  nonEditedContent: string;

  constructor() { }

  ngOnInit(): void {
    if (this.content) {
      this.nonEditedContent = this.content;
      this.content = this.formatContent(this.content);
    }
  }

  toggleContent(): void {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string): string {
    if (content.length <= this.limit) {
      return content;
    }
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }

}
