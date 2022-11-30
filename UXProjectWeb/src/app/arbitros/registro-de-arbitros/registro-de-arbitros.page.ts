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
  @ViewChild('refereeRegisterSlider') refereeRegisterSlider;

  public slidesOpts = {
    allowTouchMove: false,
    autoHeight: true,
  };

  public isBeginning: boolean = true;
  public isEnd: boolean = false;

  public slideOneForm: FormGroup;

  public submitAttempt: boolean = false;

  public slides: string[];
  public currentSlide: string;

  public bold = "color: var(--ion-color-primary); font-weight: bold;";
  public boldNot = "color: var(--ion-color-medium); font-weight: normal;";

  constructor(public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildSlides();
  }

  buildSlides() {
    const slides = ['Datos del árbitro', 'Revisión de datos'];
    this.currentSlide = slides[0];
    this.slides = slides;
  }

  async onSlidesChanged() {
    const index = await this.ionSlides.getActiveIndex();
    this.currentSlide = this.slides[index];
    this.isBeginning = await this.ionSlides.isBeginning();
    this.isEnd = await this.ionSlides.isEnd();
    this.summary();
  }

  onSlidesDidChange() {
    this.ionContent.scrollToTop();
    this.summary();
  }

  next() {
    this.refereeRegisterSlider.slideNext();
    this.summary();

  }

  back() {
    this.refereeRegisterSlider.slidePrev();
    this.summary();
  }

  summary(){
    document.getElementById("sumName").innerHTML = `${this.slideOneForm.value.firstName} ${this.slideOneForm.value.lastName}`;
    document.getElementById("sumEmail").innerHTML = this.slideOneForm.value.mail;
    document.getElementById("sumPhone").innerHTML = this.slideOneForm.value.phone;

  }

  save() {
    this.submitAttempt = true;
    console.log("success!")
    console.log(this.slideOneForm.value.phone);
  }

}
