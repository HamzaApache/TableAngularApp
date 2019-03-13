import {Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

export interface CandidatList {
  cdcivil: string;
  nom: string;
  email: string;
  numecan: string;
  prenom: string;
}

const ELEMENT_DATA: CandidatList[] = [
 {cdcivil: "M.", nom: "DUMONCEL", email: "test1@test.test", numecan: "41", prenom: "JEAN-CLAUDE"},
 {cdcivil: "M.", nom: "LACOSTE", email: "test1@test.test", numecan: "62", prenom: "FRANCIS"},
 {cdcivil: "M.", nom: "GUERASSIMOV", email: "test1@test.test", numecan: "88", prenom: "BORIS"},
 {cdcivil: "M.", nom: "DESPOIX", email: "test1@test.test", numecan: "129", prenom: "PHILIPPE"},
 {cdcivil: "M.", nom: "PERELMAN", email: "test1@test.test", numecan: "156", prenom: "MARC"},
 {cdcivil: "M.", nom: "MANZANO", email: "test1@test.test", numecan: "169", prenom: "FRANCIS"},
 {cdcivil: "M.", nom: "LAMBERT", email: "test1@test.test", numecan: "184", prenom: "JEAN"},
 {cdcivil: "M.", nom: "TRIFFAUX", email: "test1@test.test", numecan: "214", prenom: "JEAN PIERRE"},
 {cdcivil: "M.", nom: "CASTEL", email: "test1@test.test", numecan: "234", prenom: "PIERRE-HENRI"},
 {cdcivil: "M.", nom: "DEOTTE", email: "test1@test.test", numecan: "364", prenom: "JEAN-LOUIS"},
 {cdcivil: "M.", nom: "DURET", email: "test1@test.test", numecan: "380", prenom: "SERGE"},
 {cdcivil: "Mme", nom: "VOISIN", email: "test1@test.test", numecan: "403", prenom: "PATRICIA"},
 {cdcivil: "M.", nom: "PLAIN", email: "test1@test.test", numecan: "411", prenom: "ANDRE"},
 {cdcivil: "Mme", nom: "DEBAT", email: "test1@test.test", numecan: "491", prenom: "MICHELLE"},
 {cdcivil: "M.", nom: "MAUREL", email: "test1@test.test", numecan: "552", prenom: "CHRISTIAN"},
 {cdcivil: "M.", nom: "NOSMAS", email: "test1@test.test", numecan: "592", prenom: "JEAN CLARENCE"},
 {cdcivil: "Mme", nom: "LANDAIS", email: "test1@test.test", numecan: "694", prenom: "JANINE"},
 {cdcivil: "M.", nom: "MONTESSE", email: "test1@test.test", numecan: "735", prenom: "ALAIN"}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['cdcivil', 'nom','prenom', 'numecan', 'email'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */