import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  result: string;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  addCompany(form: any): void {
    console.log("You submitted: ", form)
    this.result = form["companyName"]
    
    let myCompany = new Company();
    myCompany.name = form["companyName"]
    
    if (this.result != null) {
      this.companyService.addCompany(myCompany).subscribe(data => {
        this.result = data.msg;
        alert("You have added a new Company");
        this.router.navigate(['/companies-list']);
      })
    }

  }
}
