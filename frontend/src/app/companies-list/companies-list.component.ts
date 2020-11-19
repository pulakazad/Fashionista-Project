import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];
  result: string;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    })
  }

  deleteCompany(event, companyId): void {
    console.log(companyId)
    if (companyId != null) {
      this.companyService.deleteCompanyById(companyId).subscribe(data => {
        console.log(data);
      })
      alert("You have deleted this company")
      location.reload();
    }
    
  }


}
