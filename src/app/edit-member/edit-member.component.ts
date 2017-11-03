import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor() { }

  ngOnInit() {
  }

}
