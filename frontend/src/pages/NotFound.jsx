import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark:bg-[#0c3944] dark:text-[#e7ebec]">
      <div className="pt-10">
        <section className="page_404 flex justify-center dark:bg-[#0c3944] dark:text-[#e7ebec]">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                  <div className="four_zero_four_bg dark:bg-[#0c3944]">
                    <h1 className="text-center dark:bg-[#0c3944] dark:text-[#e7ebec]">
                      404
                    </h1>
                  </div>
                  <div className="contant_box_404 dark:bg-[#0c3944] dark:text-[#e7ebec]">
                    <h3 className="h2 pt-10">On dirait que vous êtes perdu,</h3>
                    <p className="pb-5">
                      la page que vous recherchez n'est pas disponible !
                    </p>
                    <button
                      onClick={() => navigate("/home")}
                      type="button"
                      className="dark:text-[#0c3944] bg-[#ced7da] rounded-xl px-5 py-2 text-ml font-semibold mr-2"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
