

    angular.module("app", [])
      .controller("CalculadoraController", function($scope) {

        $scope.salarioBasico = function() {
            return   $scope.horasTrabajadas *   $scope.tarifaporHora || 0
          }
          $scope.porcentaje = function() {
          let porcentajeDescuento;
          let salarioBasico= $scope.salarioBasico()
          if (salarioBasico < 500) {
            porcentajeDescuento = 0;
          } else if ((salarioBasico >= 500) && (salarioBasico < 1000)) {
            porcentajeDescuento = 0.02;
          } else if ((salarioBasico >= 1000) && (salarioBasico < 4000)) {
            porcentajeDescuento = 0.08;
          } else if ((salarioBasico >= 4000) && (salarioBasico < 8000)) {
            porcentajeDescuento = 0.15;
          } else if ((salarioBasico >= 8000) && (salarioBasico < 10000)) {
            porcentajeDescuento = 0.21;}
           else {
            porcentajeDescuento = 0.30;
          } 
          return porcentajeDescuento;
        }

          $scope.descuento = function() {
           return   $scope.salarioBasico() *  $scope.porcentaje()
          }

          $scope.salarioNeto = function() {
           return  $scope.salarioBasico() -  $scope.descuento()}
      });