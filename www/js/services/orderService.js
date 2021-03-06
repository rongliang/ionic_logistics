/**
 * Created by sammy on 2016/5/13.
 */

define([],function(){
  'use strict';

  function orderService($q,$resource,ENV){

    var add = function(userID,cargoID,lorryNum){
      console.log(userID);
      console.log(cargoID);
      console.log(lorryNum);
      return $q(function(resolve,reject){
        $resource(ENV.api+ENV.interface.addOrder, {}, {
          save: {
            method: 'post'
          }
        }).save({
          cargoID:cargoID,
          userID:userID,
          lorryNum:lorryNum
        },function(res){
          resolve(res);
        });
      });
    }

    var getList = function(userID,state){
      return $q(function(resolve,reject){
        $resource(ENV.api+ENV.interface.getOrderList, {}, {
          getAll: {
            method: 'post'
          }
        }).getAll({
          userID:userID,
          state:state,
          type:1      // 表示车主
        },function(res){
          resolve(res);
        });
      });
    };

    //var getById = function(cid){
    //  return $q(function(resolve,reject){
    //
    //
    //    $resource(ENV.api+ENV.interface.getCargoById, {}, {
    //      get: {
    //        method: 'post'
    //      }
    //    }).get({
    //      cid:cid
    //    },function(res){
    //      resolve(res);
    //    });
    //  });
    //};
    //
    //var query = function(condition){
    //  return $q(function(resolve,reject){
    //    $resource(ENV.api+ENV.interface.getCargoByCon, {}, {
    //      getAll: {
    //        method: 'post'
    //      }
    //    }).getAll(condition,function(res){
    //      resolve(res);
    //    });
    //  });
    //};

    return{
      getList:getList,
      add:add
    }
  }

  return orderService;

});
