//import node modules
import React from "react";

export default function Loading() {
  return (
      <div className="d-flex justify-content-center">
        <div className="mx-auto spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
  )
}
