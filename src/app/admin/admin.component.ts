import { Component, OnInit } from '@angular/core';
import{MemberService } from '../member.service';
import { Member } from '../member.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  submitForm(newFirstName: string, newLastName: string, newRole: string, newYearsMember: number, newDescription: string){
    var newMember: Member = new Member( newFirstName, newLastName, newRole, newYearsMember, newDescription);
    this.memberService.addMember(newMember);
  }

}
