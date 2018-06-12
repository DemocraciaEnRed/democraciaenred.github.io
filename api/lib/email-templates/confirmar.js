module.exports = (token) => `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>
    /* -------------------------------------
        INLINED WITH htmlemail.io/inline
    ------------------------------------- */
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }
    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
    }
    </style>
  </head>
  <body class="" style="background-color: #383737; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #383737;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Gracias por suscribirte al newsleter de Democracia En Red.</span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                        <td>
                                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Gracias, para suscribirte al newsletter de Democracia En Red por favor confirmá tu mail:</p>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;">
                                        <a href="${process.env.HOST}/subscripcion?token=${token}" target="_blank" style="text-decoration: capitalize;display: inline-block; color: #ffffff; background-color: #a764bf; border-radius: 10rem; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 8px 25px; text-transform: uppercase; border-color: #a764bf;">Confirmar email</a>
                                      </td>
                                    </tr>
                                    <tr>
                                        <td>
                                          <p style="font-family: sans-serif; font-size: 11px; color: #686868; font-weight: normal; margin: 15px 0 0 0;">Si recibiste este correo por error simplemente puedes borrarlo.<br />Tu correo no estará suscrito en la lista de Democracia En Red hasta que hagas click al botón de confirmación. </p>
                                        </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 700 221" style="max-width: 200px; enable-background:new 0 0 700 221;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
                        .st1{fill:#FFFFFF;}
                        .st2{fill:#F4CD45;}
                        .st3{fill:#53C1B4;}
                        .st4{fill:#3CA2DA;}
                        .st5{fill:#F27057;}
                        .st6{fill:#EA1B3B;}
                        .st7{fill:#77549E;}
                    </style>
                  <g>
                      <path class="st0" d="M173.4,162.5L115,196.2c-6.8,3.9-15.8,3.9-22.6,0L34,162.5c-6.8-3.9-11.3-11.7-11.3-19.6V75.5
                          c0-7.8,4.5-15.7,11.3-19.6l58.4-33.7c6.8-3.9,15.8-3.9,22.6,0l58.4,33.7c6.8,3.9,11.3,11.7,11.3,19.6v67.4
                          C184.6,150.7,180.1,158.5,173.4,162.5"/>
                      <g>
                          <g>
                              <path class="st1" d="M250.7,74.1c0-3.2-0.1-5.7-0.2-7.5c-0.1-1.8-0.4-3.4-0.8-4.9c-0.5-1.5-1.1-2.8-2-3.8
                                  c-2.3-2.5-5.4-3.8-9.5-3.8H228v40.7h10.2c4,0,7.2-1.3,9.5-3.8c1.3-1.4,2.2-3.4,2.5-5.9C250.5,82.6,250.7,79,250.7,74.1
                                  M259.1,74.1v2.8c0,3-0.1,5.7-0.3,7.9c-0.2,2.3-0.8,4.5-1.6,6.7c-0.8,2.2-2.1,4.1-3.7,5.8c-3.5,3.5-8.3,5.3-14.4,5.3h-19.6v-56
                                  H239c6.1,0,10.9,1.8,14.4,5.3c1.6,1.7,2.9,3.5,3.7,5.6c0.8,2.1,1.4,4.2,1.6,6.3c0.2,2.2,0.3,4.7,0.3,7.6V74.1z"/>
                              <polygon class="st1" points="302.7,102.5 267.1,102.5 267.1,46.5 302.7,46.5 302.7,54.1 275.6,54.1 275.6,70.4 298.7,70.4 
                                  298.7,78 275.6,78 275.6,94.9 302.7,94.9             "/>
                              <polygon class="st1" points="361.2,102.5 352.7,102.5 352.7,65 339.9,92.4 333.6,92.4 320.5,65 320.5,102.5 312,102.5 312,46.5 
                                  320.5,46.5 336.8,81.3 352.7,46.5 361.2,46.5             "/>
                              <path class="st1" d="M400.7,74.5c0-5.6-0.2-9.5-0.6-11.8c-0.4-2.3-1.3-4.1-2.7-5.6c-1-1.1-2.2-1.9-3.7-2.5
                                  c-1.5-0.6-3-0.9-4.6-0.9c-1.6,0-3.1,0.3-4.6,0.9c-1.5,0.6-2.7,1.5-3.7,2.5c-1.3,1.5-2.2,3.4-2.7,5.6c-0.4,2.3-0.6,6.2-0.6,11.7
                                  c0,3,0.1,5.3,0.1,7.1c0.1,1.8,0.3,3.3,0.5,4.7c0.3,1.3,0.6,2.4,0.9,3.1c0.4,0.8,0.9,1.6,1.7,2.5c1,1.1,2.3,1.9,3.7,2.5
                                  c1.5,0.6,3,0.9,4.6,0.9c3.4,0,6.1-1.2,8.3-3.5c0.9-1,1.6-2.1,2.1-3.4c0.5-1.3,0.8-3,1-5.2C400.7,81,400.7,78.1,400.7,74.5
                                  M409.2,74.5c0,4.4-0.1,7.8-0.2,10.2c-0.2,2.3-0.6,4.5-1.4,6.6c-0.8,2.1-2,4-3.7,5.7c-4,4-8.9,6-14.7,6s-10.7-2-14.6-5.9
                                  c-1.7-1.8-3-3.7-3.7-5.7c-0.8-2-1.2-4.2-1.4-6.6c-0.2-2.4-0.3-5.8-0.3-10.2c0-3.4,0-6.1,0.1-8.1c0.1-2,0.3-3.8,0.6-5.5
                                  c0.3-1.7,0.8-3.2,1.6-4.7c0.7-1.5,1.8-2.9,3.1-4.2c3.9-4,8.8-6,14.6-6s10.7,2,14.7,6c1.7,1.8,2.9,3.7,3.7,5.7
                                  c0.8,2,1.2,4.2,1.4,6.6C409.1,66.6,409.2,70,409.2,74.5"/>
                              <path class="st1" d="M457.3,85.7c-0.4,2.8-1.3,5.2-2.5,7.4c-1.2,2.2-2.6,4-4.3,5.4c-1.7,1.5-3.7,2.5-5.9,3.3
                                  c-2.2,0.7-4.6,1.1-7.1,1.1c-1.9,0-3.8-0.2-5.5-0.7c-1.7-0.5-3.4-1.1-4.9-2.1c-1.6-0.9-3-2-4.2-3.2c-1.7-1.8-3-3.7-3.7-5.7
                                  c-0.8-2-1.2-4.2-1.4-6.6c-0.2-2.4-0.3-5.8-0.3-10.2c0-3.4,0.1-6.1,0.1-8.1c0.1-2,0.3-3.8,0.6-5.5c0.3-1.7,0.8-3.2,1.6-4.7
                                  c0.7-1.5,1.8-2.9,3.1-4.2c1.9-1.9,4.1-3.4,6.6-4.4c2.5-1,5.1-1.5,8-1.5c5.2,0,9.6,1.5,13.1,4.5c3.5,3,5.8,7.2,6.7,12.8h-8.6
                                  c-0.7-2.9-2-5.3-3.9-7c-1.9-1.7-4.4-2.6-7.3-2.6c-1.6,0-3.2,0.3-4.6,0.9c-1.4,0.6-2.6,1.4-3.6,2.5c-0.7,0.8-1.3,1.6-1.7,2.5
                                  c-0.4,0.8-0.7,1.9-1,3.3c-0.3,1.4-0.4,2.9-0.5,4.6c-0.1,1.7-0.1,4.1-0.1,7.1c0,3,0,5.3,0.1,7c0.1,1.7,0.3,3.3,0.5,4.6
                                  c0.3,1.4,0.6,2.5,1,3.3c0.4,0.8,1,1.7,1.7,2.5c1,1.1,2.2,1.9,3.6,2.5c1.4,0.6,3,0.9,4.6,0.9c2,0,3.8-0.4,5.3-1.2
                                  c1.5-0.8,2.8-1.9,3.8-3.4c1-1.5,1.7-3.1,2.2-5H457.3z"/>
                              <path class="st1" d="M496.7,62.9c0-2.7-0.9-4.9-2.6-6.5c-1.7-1.6-4-2.4-6.9-2.4h-12.5v17.5h12.5c2.9,0,5.1-0.8,6.9-2.3
                                  C495.9,67.7,496.7,65.6,496.7,62.9 M506.9,102.5H497l-11.7-23.6h-10.6v23.6h-8.5v-56h21.6c3.4,0,6.4,0.7,9.1,2.1
                                  c2.6,1.4,4.7,3.3,6.1,5.8c1.4,2.5,2.1,5.3,2.1,8.5c0,3.8-1,7.1-3.1,9.6c-2,2.6-4.7,4.3-8,5.2L506.9,102.5z"/>
                              <path class="st1" d="M543.3,84l-8.4-24.9L526.2,84H543.3z M558.5,102.5h-9l-3.8-11.3h-22l-3.8,11.3h-9l20.4-56h6.8L558.5,102.5z"
                                  />
                              <path class="st1" d="M602,85.7c-0.5,2.8-1.3,5.2-2.5,7.4c-1.2,2.2-2.6,4-4.4,5.4c-1.7,1.5-3.7,2.5-5.9,3.3
                                  c-2.2,0.7-4.6,1.1-7.1,1.1c-1.9,0-3.8-0.2-5.5-0.7c-1.7-0.5-3.4-1.1-5-2.1c-1.6-0.9-3-2-4.2-3.2c-1.7-1.8-3-3.7-3.7-5.7
                                  c-0.8-2-1.2-4.2-1.4-6.6c-0.2-2.4-0.3-5.8-0.3-10.2c0-3.4,0-6.1,0.1-8.1c0.1-2,0.3-3.8,0.6-5.5c0.3-1.7,0.8-3.2,1.6-4.7
                                  c0.7-1.5,1.8-2.9,3.1-4.2c1.9-1.9,4.1-3.4,6.6-4.4c2.5-1,5.1-1.5,8-1.5c5.2,0,9.6,1.5,13.1,4.5c3.5,3,5.8,7.2,6.7,12.8h-8.6
                                  c-0.7-2.9-2-5.3-3.9-7c-1.9-1.7-4.4-2.6-7.3-2.6c-1.6,0-3.2,0.3-4.6,0.9c-1.4,0.6-2.6,1.4-3.6,2.5c-0.7,0.8-1.3,1.6-1.7,2.5
                                  c-0.4,0.8-0.7,1.9-1,3.3c-0.3,1.4-0.4,2.9-0.5,4.6c-0.1,1.7-0.1,4.1-0.1,7.1c0,3,0,5.3,0.1,7c0.1,1.7,0.3,3.3,0.5,4.6
                                  c0.3,1.4,0.6,2.5,1,3.3c0.4,0.8,1,1.7,1.7,2.5c1,1.1,2.2,1.9,3.6,2.5c1.4,0.6,3,0.9,4.6,0.9c2,0,3.8-0.4,5.3-1.2
                                  c1.5-0.8,2.8-1.9,3.8-3.4c1-1.5,1.7-3.1,2.2-5H602z"/>
                              <rect x="611" y="46.5" class="st1" width="8.5" height="56"/>
                              <path class="st1" d="M659.8,84l-8.4-24.9L642.7,84H659.8z M675,102.5h-9l-3.8-11.3h-22l-3.8,11.3h-9l20.4-56h6.8L675,102.5z"/>
                              <polygon class="st1" points="255.1,172.9 219.5,172.9 219.5,116.9 255.1,116.9 255.1,124.5 228,124.5 228,140.8 251.1,140.8 
                                  251.1,148.4 228,148.4 228,165.2 255.1,165.2             "/>
                              <polygon class="st1" points="306.3,172.9 298.6,172.9 272.9,133.5 272.9,172.9 264.4,172.9 264.4,116.9 272.2,116.9 297.9,156.2 
                                  297.9,116.9 306.3,116.9             "/>
                              <path class="st1" d="M370.1,133.3c0-2.7-0.9-4.9-2.6-6.5c-1.7-1.6-4-2.4-6.9-2.4h-12.5V142h12.5c2.8,0,5.1-0.8,6.9-2.3
                                  C369.2,138.1,370.1,136,370.1,133.3 M380.2,172.9h-9.8l-11.7-23.6h-10.5v23.6h-8.5v-56h21.6c3.4,0,6.4,0.7,9.1,2.1
                                  c2.6,1.4,4.7,3.3,6.1,5.8c1.4,2.5,2.1,5.3,2.1,8.5c0,3.8-1,7.1-3.1,9.6c-2.1,2.6-4.7,4.3-8,5.3L380.2,172.9z"/>
                              <polygon class="st1" points="424.2,172.9 388.6,172.9 388.6,116.9 424.2,116.9 424.2,124.5 397.1,124.5 397.1,140.8 420.2,140.8 
                                  420.2,148.4 397.1,148.4 397.1,165.2 424.2,165.2             "/>
                              <path class="st1" d="M464.7,144.5c0-3.2-0.1-5.7-0.2-7.5c-0.1-1.8-0.4-3.4-0.8-4.9c-0.4-1.5-1.1-2.8-2-3.8
                                  c-2.3-2.5-5.4-3.8-9.5-3.8H442v40.7h10.2c4,0,7.2-1.2,9.5-3.8c1.3-1.5,2.2-3.4,2.5-5.9C464.5,153,464.7,149.3,464.7,144.5
                                  M473.1,144.5v2.8c0,3-0.1,5.7-0.3,7.9c-0.2,2.3-0.8,4.5-1.6,6.6c-0.8,2.2-2.1,4.1-3.7,5.8c-3.5,3.5-8.3,5.3-14.4,5.3h-19.6v-56
                                  h19.6c6.1,0,10.9,1.8,14.4,5.3c1.7,1.7,2.9,3.5,3.7,5.6c0.8,2.1,1.4,4.2,1.6,6.3c0.2,2.1,0.3,4.7,0.3,7.6V144.5z"/>
                          </g>
                      </g>
                      <g>
                          <path class="st2" d="M61.4,91.6c0-4.1,2.4-8.2,5.9-10.2l15.2-8.8l-17-29.5L38,59C31.6,62.6,27.3,70,27.3,77.4v31.8l34.1,0V91.6z"
                              />
                          <path class="st3" d="M97.8,63.8c3.5-2,8.2-2,11.8,0l15.2,8.8l17-29.5l-27.5-15.9c-6.4-3.7-14.9-3.7-21.3,0L65.5,43.1l17,29.5
                              L97.8,63.8z"/>
                          <path class="st4" d="M140,81.4c3.5,2,5.9,6.1,5.9,10.2v17.6l34.1,0V77.4c0-7.4-4.3-14.8-10.6-18.4l-27.5-15.9l-17,29.5L140,81.4z"
                              />
                          <path class="st5" d="M67.3,137c-3.5-2-5.9-6.1-5.9-10.2v-17.6l-34.1,0v31.8c0,7.4,4.3,14.7,10.6,18.4l27.5,15.9l17-29.5L67.3,137z
                              "/>
                          <path class="st6" d="M109.5,154.5c-3.5,2-8.2,2-11.8,0l-15.2-8.8l-17,29.5L93,191.1c6.4,3.7,14.9,3.7,21.3,0l27.5-15.9l-17-29.5
                              L109.5,154.5z"/>
                          <path class="st7" d="M145.9,109.2v17.6c0,4.1-2.4,8.2-5.9,10.2l-15.2,8.8l17,29.5l27.5-15.9c6.4-3.7,10.6-11.1,10.6-18.4v-31.8
                              L145.9,109.2z"/>
                      </g>
                      <rect x="22.7" y="107.2" class="st1" width="162" height="3.9"/>
                      
                          <rect x="22.7" y="107.2" transform="matrix(0.5004 -0.8658 0.8658 0.5004 -42.7314 144.2807)" class="st1" width="162" height="3.9"/>
                      
                          <rect x="101.7" y="28.2" transform="matrix(0.8661 -0.4998 0.4998 0.8661 -40.687 66.4249)" class="st1" width="3.9" height="162"/>
                  </g>
                </svg>

              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`
