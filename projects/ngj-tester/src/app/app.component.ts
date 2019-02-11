import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { en_GB, th_TH } from 'ngj-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngj-datepicker-tester';

  fg: FormGroup;
  dateFrom = new FormControl();
  dateTo = new FormControl();

  opts = th_TH;

  ngOnInit() {
    const myDate = new Date(1981, 4, 2);
    this.fg = new FormGroup({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    });
  }
  changeLang() {
    if (this.opts.language === 'th-TH') {
      this.opts = en_GB;
    } else {
      this.opts = th_TH;
    }
  }

  toggleEnableDisable() {
    (this.dateFrom.enabled)
      ? this.dateFrom.disable()
      : this.dateFrom.enable();
  }

  update() {
    this.fg.get('dateTo').setValue(new Date());
  }

  reset() {
    this.fg.reset();
  }
}
