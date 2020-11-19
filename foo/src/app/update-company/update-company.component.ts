import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  companyId: string;
  companyName: string;

  constructor(private companyService: CompanyService, private location: Location, private router: Router) {}

  ngOnInit(): void {
    console.log(this.location.getState());
    if (this.location.getState()['id'] != null) {
      this.companyId = this.location.getState()['id'];
      this.companyName = this.location.getState()['name']
    }
  }

  updateCompany(form: any): void {
    this.companyName = form["companyName"];

    let myCompany = new Company();
    myCompany.name = form["companyName"];

    if (this.companyId != null) {
      this.companyService.updateCompanyById(myCompany, this.companyId).subscribe(data => {
        console.log(data);
        alert("You have updated the Company Name");
        this.router.navigate(['/companies-list']);
      });
    }

  }

}
