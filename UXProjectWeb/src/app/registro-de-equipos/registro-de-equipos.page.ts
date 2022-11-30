import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent, IonSlides, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-de-equipos',
  templateUrl: './registro-de-equipos.page.html',
  styleUrls: ['./registro-de-equipos.page.scss'],
})
export class RegistroDeEquiposPage implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('teamRegisterSlider') teamRegisterSlider;

  public slidesOpts = {
    allowTouchMove: false,
    autoHeight: true,
  };

  public isBeginning: boolean = true;
  public isEnd: boolean = false;

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;

  public submitAttempt: boolean = false;

  public slides: string[];
  public currentSlide: string;

  public bold = "color: var(--ion-color-primary); font-weight: bold;";
  public boldNot = "color: var(--ion-color-medium); font-weight: normal;";

  constructor(public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      teamName: ['', Validators.required],
      league: ['', Validators.required]
    });

    this.slideTwoForm = formBuilder.group({
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
    const slides = ['Datos del equipo', 'Datos del capitán', 'Revisión de datos'];
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
    this.teamRegisterSlider.slideNext();
    this.summary();

  }

  back() {
    this.teamRegisterSlider.slidePrev();
    this.summary();
  }

  summary(){
    document.getElementById("sumTeamName").innerHTML = this.slideOneForm.value.teamName;
    document.getElementById("sumLeague").innerHTML = this.slideOneForm.value.league;

    document.getElementById("sumName").innerHTML = `${this.slideTwoForm.value.firstName} ${this.slideTwoForm.value.lastName}`;
    document.getElementById("sumEmail").innerHTML = this.slideTwoForm.value.mail;
    document.getElementById("sumPhone").innerHTML = this.slideTwoForm.value.phone;
  }

  save() {
    this.submitAttempt = true;
    console.log("success!")
  }
}
