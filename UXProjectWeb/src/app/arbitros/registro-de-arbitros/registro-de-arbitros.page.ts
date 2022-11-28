import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent, IonSlides, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-de-arbitros',
  templateUrl: './registro-de-arbitros.page.html',
  styleUrls: ['./registro-de-arbitros.page.scss'],
})
export class RegistroDeArbitrosPage implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('registerSlider') registerSlider;

  public slidesOpts = {
    allowTouchMove: false,
    autoHeight: true,
  };

  public isBeginning: boolean = true;
  public isEnd: boolean = false;

  public slideOneForm: FormGroup;

  public submitAttempt: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  next() {
    //if (this.slideOneForm.valid) {
      this.registerSlider.slideNext();
      this.isBeginning = false;
      this.isEnd = true;
      this.summary();
    //}
  }

  back() {
    this.registerSlider.slidePrev();
    this.isBeginning = true;
    this.isEnd = false;
  }

  summary(){
    let name = document.getElementById("sumName").innerHTML = `${this.slideOneForm.value.firstName} ${this.slideOneForm.value.lastName}`;
    let email = document.getElementById("sumEmail").innerHTML = this.slideOneForm.value.mail;
    let phone = document.getElementById("sumPhone").innerHTML = this.slideOneForm.value.phone;

    name = this.slideOneForm.value.firstName + this.slideOneForm.value.lastName;
    email = this.slideOneForm.value.mail;
    phone = this.slideOneForm.value.phone;
  }

  save() {
    this.submitAttempt = true;
    console.log("success!")
    console.log(this.slideOneForm.value.phone);
  }

}
