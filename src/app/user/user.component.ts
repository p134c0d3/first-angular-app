import { Component, EventEmitter, Input, Output, output, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // avatar = input.required<string>(); <-- this is the same as the above, newer, but not widely used
  // name = input.required<string>(); <-- this is the same as the above, newer, but not widely used
  // id = input.required<string>(); <-- this is the same as the above, newer, but not widely used

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); <-- this is the same as the above, newer, but not widely used

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }
  // imagePath = computed(() => `assets/users/${this.avatar()}`); <-- this is the same as the above, newer, but not widely used

  onSelectUser() {
    this.select.emit(this.id);
  }
}
