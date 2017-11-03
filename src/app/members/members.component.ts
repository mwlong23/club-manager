import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member [];

  goToMemberDetail(clickedMember: Member){
    this.router.navigate(['members', clickedMember.id]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
