import React, { useState, useEffect, useRef } from 'react';

export function mainScreenData({gameState}) {
  return (
      <div className="MainScreenData" style={{marginBottom: "20px", marginTop: "10px"}}>
        <hr/>
        <div>OKOKO</div>
        <div className="col-md-12" style={{textAlign: "center"}}>
          <h3>List of Games:</h3>
        </div>
        <hr/>
        <div>
          <h3>Start a new game</h3>
        </div>
      </div>
  );
}