import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  compound:any;

  constructor(private route: ActivatedRoute, private apiService: ApiService){ }

  ngOnInit() {
    const compoundId = this.route.snapshot.paramMap.get('id');
    this.apiService.fetchCompoundById(compoundId).subscribe((res:any)=>{
      this.compound = res;
      console.log(this.compound)
    })
    // this.hero$ = this.service.getHero(heroId);
  }
}
