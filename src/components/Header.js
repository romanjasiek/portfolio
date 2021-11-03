import React, { useState } from "react";
import SideNavbarCategories from "./SideNavbarCategories";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <SideNavbarCategories isOpen={isOpen} />
        <div className="header__container" id="home">
          <nav className="nav">
            <ul>
              <li className="navigation__list-item">
                <a
                  className="navigation__list-item-link navigation__list-item-link--logo"
                  href="#"
                >
                  <svg
                    className="navigation__list-item-logo"
                    viewBox="0, 0, 1250, 1045"
                  >
                    <g>
                      <path d="M999.535,481.232 C999.535,578.712 920.23,658.025 822.745,658.025 C725.26,658.025 645.953,578.712 645.953,481.232 C645.953,383.75 725.26,304.44 822.745,304.44 C920.23,304.44 999.535,383.75 999.535,481.232 M610.593,481.232 C610.593,598.21 705.765,693.382 822.745,693.382 C939.727,693.382 1034.895,598.21 1034.895,481.232 C1034.895,364.252 939.727,269.082 822.745,269.082 C705.765,269.082 610.593,364.252 610.593,481.232 M920.335,481.232 C920.335,535.042 876.555,578.82 822.745,578.82 C768.932,578.82 725.158,535.042 725.158,481.232 C725.158,427.422 768.932,383.642 822.745,383.642 C876.555,383.642 920.335,427.422 920.335,481.232 M657.268,481.232 C657.268,572.475 731.503,646.71 822.745,646.71 C913.99,646.71 988.222,572.475 988.222,481.232 C988.222,389.987 913.99,315.755 822.745,315.755 C731.503,315.755 657.268,389.987 657.268,481.232 M822.745,536.39 C792.333,536.39 767.585,511.647 767.585,481.232 C767.585,450.817 792.333,426.072 822.745,426.072 C853.16,426.072 877.905,450.817 877.905,481.232 C877.905,511.647 853.16,536.39 822.745,536.39 M727.982,481.232 C727.982,533.482 770.495,575.992 822.745,575.992 C874.995,575.992 917.503,533.482 917.503,481.232 C917.503,428.98 874.995,386.472 822.745,386.472 C770.495,386.472 727.982,428.98 727.982,481.232 M382.865,557.09 L382.902,557.225 C382.89,557.23 382.878,557.24 382.87,557.245 C382.685,557.305 382.522,557.372 382.375,557.455 C382.385,557.325 382.655,557.097 382.865,557.09 M361.647,403.635 L361.682,403.77 C361.677,403.775 361.668,403.785 361.658,403.79 C361.473,403.85 361.305,403.917 361.16,404 C361.17,403.87 361.438,403.642 361.647,403.635 M149.865,665.562 C156.042,666.417 162.107,667.29 168.38,667.925 C162.318,669.802 155.978,670.417 149.777,671.115 L131.303,672.605 C125.283,673.127 119.163,673.64 114.022,675.045 C112.68,675.357 111.668,675.827 110.583,676.217 C110.217,676.477 109.848,676.702 109.452,676.902 C109.188,677.145 109.147,677.382 108.91,677.542 C107.443,679.472 105.81,681.987 104.303,684.547 C98.132,694.855 92.175,705.74 85.853,716.332 C79.505,726.952 73.025,737.542 65.603,747.725 C68.772,735.52 73.163,723.852 77.933,712.345 C82.848,700.875 88.09,689.647 94.628,678.688 C96.305,675.945 98.03,673.245 100.393,670.307 C101.283,669.415 102.24,668.427 103.205,667.76 C104.168,667.21 105.153,666.682 106.135,666.19 C107.97,665.54 109.84,664.857 111.545,664.605 C118.503,663.252 124.853,663.397 131.193,663.71 C137.508,664.03 143.702,664.827 149.865,665.562 M80.217,636.807 C78.61,626.67 78.865,616.4 80.683,606.152 C81.643,601.027 83.062,595.895 85.483,590.83 C86.698,588.295 88.22,585.8 90.268,583.42 C91.31,582.237 92.522,581.13 93.87,580.1 C94.592,579.627 95.33,579.11 96.068,578.712 L98.275,577.712 C104.275,575.277 110.12,575.25 115.505,575.74 C120.905,576.305 126.02,577.485 130.92,579.055 C135.818,580.62 140.545,582.467 145.155,584.5 C149.783,586.555 154.198,588.745 158.952,590.607 C153.792,591.235 148.645,590.39 143.66,589.85 L128.952,587.732 C124.13,587.067 119.382,586.535 114.84,586.45 C110.325,586.36 105.925,586.737 102.663,588.137 L101.443,588.625 C101.08,588.812 100.803,589.027 100.465,589.207 L99.5,589.977 L98.538,590.91 C97.235,592.227 96.058,593.975 94.945,595.847 C92.723,599.622 90.9,603.99 89.24,608.475 C85.93,617.505 83.272,627.062 80.217,636.807 M675.852,175.735 L969.638,175.735 L969.638,240.677 L675.852,240.677 z M1230.547,740.655 L616.093,740.655 C604.9,733.082 594.5,725.81 584.718,718.84 L1230.547,718.84 L1230.547,740.655 z M548.737,693.842 C548.722,693.83 548.71,693.82 548.698,693.815 L548.805,693.862 L548.737,693.842 z M613.41,800.872 L613.352,800.872 C582.43,800.87 490.04,769.897 472.663,762.027 C469.038,760.382 465.035,759.272 460.793,758.095 C457.288,757.122 453.66,756.115 449.91,754.725 L439.77,750.972 C416.423,743.3 403.138,739.86 380.018,730.892 L378.225,730.195 L376.878,730.315 C360.505,731.76 344.027,733.015 327.6,733.987 C319.383,734.455 311.155,734.887 302.965,735.085 C298.87,735.192 294.763,735.267 290.715,735.188 C288.685,735.167 286.658,735.13 284.69,734.972 C282.638,734.917 280.848,734.615 279.01,734.357 L278.342,734.255 C272.242,734.21 266.02,733.92 259.862,733.497 C253.693,733.08 247.538,732.43 241.41,731.575 C235.277,730.737 229.193,729.592 223.215,727.995 C217.277,726.362 211.295,724.44 206.092,720.962 C211.008,724.852 216.908,727.29 222.773,729.417 C228.688,731.512 234.753,733.16 240.878,734.5 C246.995,735.86 253.17,737.01 259.372,737.93 C260.443,738.087 261.513,738.217 262.582,738.37 C259.95,742.825 258.978,746.475 254.383,750.62 C254.005,750.972 253.66,751.222 253.295,751.535 L253.03,751.76 C252.923,751.847 253.092,751.71 253.122,751.71 C253.178,751.657 253.568,751.617 253.37,751.672 C253.098,751.835 252.243,752.097 251.315,752.242 C249.465,752.58 247.288,752.762 245.12,752.88 C240.755,753.12 236.243,753.137 231.725,753.08 C213.61,752.76 195.32,751.487 177.103,749.955 C194.895,754.282 212.728,758.355 230.945,761.527 C234.193,762.077 237.47,762.56 240.79,762.982 L240.67,763.14 L238.478,765.532 C235.432,768.647 232.035,771.557 228.348,774.142 C220.982,779.335 212.765,783.657 204.11,786.977 L200.885,788.295 L197.58,789.417 L190.94,791.632 C186.452,792.92 181.92,794.125 177.363,795.267 C172.762,796.188 168.167,797.225 163.527,798.055 L149.523,800.165 L163.7,799.457 C168.42,799.095 173.128,798.515 177.865,798.05 C182.562,797.357 187.273,796.602 191.975,795.75 L198.978,794.165 L202.482,793.352 L205.94,792.33 C209.07,791.472 212.17,790.442 215.245,789.332 C238.768,793.127 253.533,816.372 261.78,836.43 C264.182,848 265.853,859.692 266.742,871.42 C267.068,875.265 267.12,879.132 267.323,882.977 L267.57,888.745 L267.497,894.525 L267.34,906.055 L266.135,923.295 C265.955,925.202 265.665,927.105 265.432,929.01 L263.967,940.41 C263.225,945.4 262.255,950.352 261.302,955.295 L261.268,955.305 L261.098,956.34 C260.688,958.46 260.285,960.58 259.905,962.697 C257.927,969.977 248.705,995.467 213.9,1009.85 C145.9,1037.943 66.98,1004.915 48.27,984.637 C28.7,963.44 20.245,907.865 22.223,866.332 C24.178,825.207 44.035,574.495 46.64,557.985 C48.4,546.835 53.2,538.355 56.38,532.74 C57.493,530.772 58.425,529.092 59.145,527.505 C67.205,522.385 75.173,517.205 83.05,511.832 C88.132,508.33 93.185,504.8 98.118,501.077 C102.99,497.315 108.005,493.555 112.04,488.902 C107.077,492.48 101.495,494.907 95.97,497.42 C90.413,499.87 84.75,502.117 79.09,504.327 C72.87,506.717 66.608,509.025 60.325,511.272 C60.228,509.5 60.105,507.51 59.96,505.232 C59.09,491.287 57.775,470.212 60.163,460.66 C62.333,451.997 88.68,427.927 111.85,410.595 L114.615,408.525 L115.153,405.115 C127.415,327.062 134.51,251.347 139.202,201.247 C140.432,188.09 141.5,176.725 142.4,168.137 C142.65,165.807 142.815,163.367 142.982,160.832 C144.103,144.207 145.365,125.362 175.26,106.542 C180.555,103.207 186.952,99.15 194.085,94.625 C227.96,73.147 307.283,22.845 318.293,20.577 C319.168,20.48 320.775,20.435 323.025,20.435 C333.215,20.435 356.435,21.365 382.805,22.62 C384.103,28.53 386.54,35.215 391.043,36.337 C394.47,37.195 413.388,37.945 428.948,38.147 C432.497,38.192 435.695,38.215 438.587,38.215 C444.832,38.215 449.603,38.112 453.275,37.942 C452.675,47.997 451.027,56.72 448.367,59.137 C440.467,66.32 365.755,91.842 321.527,94.665 L319.573,94.787 L292.84,77.202 L313.51,101.675 C303.733,125.335 262.758,169.565 251.277,180.087 C250.74,180.577 250.255,181.105 249.807,181.66 L208.923,175.735 L246.365,189.597 C244.743,197.925 246.482,209.897 248.88,226.282 C252.723,252.545 257.503,285.232 247.975,308.785 L247.18,310.757 L125.69,393.447 L239.025,330.925 L238.85,331.36 L260.033,319.347 C260.247,319.225 260.467,319.102 260.68,318.98 L284.69,305.735 L284.68,305.72 C314.772,289.495 343.835,275.302 350.495,274.73 C368.635,279.597 540.555,379.957 552.547,392.745 C566.415,407.542 584.307,434.16 586.073,440.232 C585.865,447.805 581.83,509.752 577.648,544.47 L572.74,538.655 C571.755,537.527 570.93,536.53 569.537,535.027 C568.305,533.717 567.258,532.795 566.122,531.702 C557.405,523.727 548.812,516.75 540.08,509.612 C528.323,500.102 516.468,490.8 504.53,481.62 C495.52,469.565 486.16,457.572 483.302,455.772 C475.612,450.93 445.965,434.897 423.707,422.967 C417.372,418.77 410.94,414.665 404.245,410.755 C401.735,409.327 399.188,407.92 396.505,406.582 C393.675,405.297 391.188,403.885 386.83,403.032 C383.015,402.497 379.978,402.722 376.94,402.972 C375.823,403.08 374.73,403.222 373.635,403.365 C373.635,403.362 373.635,403.362 373.635,403.362 C375.125,399.812 376.237,396.245 377.062,392.615 C377.888,388.992 378.46,385.325 378.603,381.637 C378.688,377.975 378.385,374.14 376.77,370.915 C377.465,374.435 376.77,377.902 375.81,381.187 C374.777,384.482 373.365,387.635 371.76,390.65 C370.158,393.662 368.305,396.55 366.277,399.137 C365.268,400.427 364.203,401.632 363.143,402.635 C362.638,403.102 362.103,403.5 361.682,403.77 L361.73,403.952 C358.832,405.062 355.638,406.285 352.302,407.557 C346.56,408.947 340.888,410.467 335.228,412.037 C324.443,415.057 313.772,418.315 303.143,421.687 C260.652,435.2 218.89,450.497 177.103,465.675 C219.732,453.042 262.345,440.292 305.348,429.422 C316.095,426.715 326.862,424.125 337.647,421.797 C348.415,419.492 359.265,417.35 369.92,416.112 C372.57,415.82 375.207,415.6 377.747,415.512 C380.245,415.427 382.805,415.517 384.48,415.89 C385.59,416.142 388.078,417.387 390.193,418.585 C392.415,419.857 394.652,421.272 396.893,422.725 C405.853,428.685 414.68,435.277 423.385,442.007 C440.795,455.507 457.867,469.61 474.74,483.915 C491.595,498.242 508.28,512.81 524.573,527.647 C532.64,535.052 540.865,542.62 548.122,550.092 C548.943,550.972 549.9,551.975 550.54,552.717 L552.775,555.407 L557.875,561.762 L568.078,574.752 C572.82,580.867 577.518,587.015 582.175,593.177 C577.765,631.255 571.872,680.587 569.2,699.255 C565.525,698.452 560.078,697.102 552.26,694.86 C520.667,676.555 491.385,640.422 485.91,617.42 C486.277,616.915 486.615,616.42 486.923,615.922 C488.01,614.112 488.865,612.34 489.612,610.56 C491.103,607.012 492.21,603.445 493.04,599.815 C493.865,596.192 494.435,592.525 494.578,588.835 C494.66,585.172 494.358,581.34 492.745,578.112 C493.44,581.632 492.745,585.102 491.785,588.39 C490.755,591.682 489.337,594.832 487.733,597.85 C486.135,600.862 484.28,603.752 482.25,606.335 C482.21,606.39 482.163,606.438 482.122,606.492 C481.883,606.42 481.617,606.34 481.307,606.247 C432.927,594.802 411.775,568.25 393.272,560.15 C393.85,559.032 394.383,557.925 394.848,556.817 C396.345,553.265 397.45,549.7 398.28,546.07 C399.105,542.447 399.675,538.78 399.818,535.092 C399.9,531.427 399.598,527.595 397.983,524.37 C398.682,527.887 397.983,531.357 397.027,534.645 C395.992,537.938 394.578,541.09 392.973,544.105 C391.37,547.117 389.522,550.007 387.492,552.592 C386.483,553.882 385.418,555.085 384.358,556.087 C383.85,556.557 383.318,556.952 382.902,557.225 L383.1,557.995 C352.717,557.987 212.458,578.112 212.458,578.112 L172.503,590.515 C172.503,590.515 204.325,608.615 218.118,608.875 C221.033,608.927 254.603,611.08 295.72,614.162 C309.328,616.295 323.015,618.022 336.765,619.18 C344.56,619.812 352.38,620.27 360.198,620.64 L371.943,620.955 L377.768,621.11 C379.515,621.142 381.38,621.325 383.22,621.512 C398.152,623.352 413.23,627.112 427.777,631.615 C435.057,633.912 442.233,636.487 449.158,639.44 C456.027,642.438 462.795,645.767 468.495,649.857 C469.91,650.88 471.228,651.942 472.462,653.04 L476.867,656.98 L485.75,664.715 C491.705,669.82 497.717,674.832 503.777,679.787 C504.372,680.275 504.983,680.75 505.582,681.24 L503.152,680.53 L520.11,692.902 C526.903,698.277 533.727,703.605 540.6,708.87 L541.088,708.205 L543.795,710.18 C553.425,717.21 563.63,724.645 574.562,732.44 C568.172,738.997 553.537,756.08 562.145,767.322 C569.343,776.72 601.263,790.91 620.018,795.772 C617.292,798.75 614.732,800.667 613.41,800.872 M278.108,950.07 C278.353,947.362 278.582,944.652 278.737,941.94 L279.188,929.947 C279.247,927.952 279.367,925.96 279.383,923.962 L279.26,917.965 L279.008,906.002 L278.095,894.072 L277.63,888.122 L276.835,882.197 C276.272,878.257 275.858,874.305 275.165,870.39 C273.02,857.597 269.945,845.005 266.08,832.695 C264.125,823.385 261.733,813.607 259.418,804.727 C265.052,810.595 270.378,816.957 275.438,823.577 C281.247,831.295 286.735,839.332 291.955,847.565 C297.122,855.827 302.21,864.195 306.513,872.987 C303.51,863.642 299.66,854.577 295.695,845.562 C291.673,836.57 287.337,827.685 282.56,818.965 C277.717,810.275 272.46,801.74 266.305,793.56 C262.147,788.142 257.647,782.772 252.012,778.022 C251.175,775.17 250.675,773.527 250.675,773.527 L296.483,742.622 C298.605,742.77 300.725,742.892 302.848,743.007 C311.177,743.47 319.475,743.695 327.78,743.882 C343.753,744.207 359.67,744.262 375.658,744.142 C395.628,753.772 415.612,763.132 436.12,771.927 C422.448,815.32 355.06,921.085 278.108,950.07 M397.835,23.352 C397.38,26.095 396.13,28.962 393.312,31.017 C392.955,30.962 392.64,30.907 392.41,30.85 C391.233,30.555 389.807,27.292 388.705,22.902 C391.723,23.05 394.768,23.2 397.835,23.352 M453.495,32.23 C438.503,32.865 409.033,32.337 397.087,31.41 C399.22,29.03 400.217,26.18 400.608,23.492 C418.793,24.405 437.395,25.402 453.497,26.312 C453.538,28.277 453.538,30.26 453.495,32.23 M296.943,279.985 C287.242,284.977 277.573,290.182 269.04,294.875 C272.578,271.045 268.698,244.49 265.675,223.825 C263.967,212.172 261.652,196.307 263.175,192.202 C268.943,186.83 283.015,172.272 296.943,155.615 L296.943,279.985 z M592.17,744.842 C591.955,745.675 591.643,746.487 591.13,747.25 C587.278,752.955 575.945,755.722 565.573,756.53 C567.263,749.265 574.643,740.43 579.242,735.767 C583.445,738.742 587.727,741.755 592.17,744.842 M629.628,778.295 C628.635,782.855 626.405,787.237 623.87,790.92 C608.542,787.115 573.903,773.365 566.638,763.885 C565.655,762.597 565.265,761.062 565.26,759.392 C572.898,758.825 588.155,756.71 593.475,748.83 C593.968,748.095 594.357,747.335 594.65,746.547 C604.797,753.557 615.56,760.825 627.185,768.385 C628.283,769.1 631.208,771.002 629.628,778.295 M311.09,162.062 L1008.023,162.062 L1008.023,303.025 L966.535,303.025 C1018.533,345.062 1051.868,409.315 1051.868,481.232 C1051.868,607.567 949.083,710.355 822.745,710.355 C709.977,710.355 616.042,628.44 597.148,521.002 C594.875,508.075 593.622,494.8 593.622,481.232 C593.622,463.345 595.75,445.955 599.645,429.235 C611.412,378.737 639.89,334.607 678.955,303.025 L440.272,303.025 C398.305,278.837 360.022,258.367 351.908,257.79 C345.395,257.335 329.193,264.067 311.09,272.885 L311.09,162.062 z M1038.432,138.255 L1214.517,138.255 L1214.517,149.335 L1038.432,149.335 z M1066.01,113.505 L1198.253,113.505 L1198.253,126.942 L1066.01,126.942 z M1050.455,162.062 L1230.547,162.062 L1230.547,303.025 L1050.455,303.025 z M1244.69,147.92 L1225.83,147.92 L1225.83,126.94 L1209.565,126.94 L1209.565,102.19 L1054.698,102.19 L1054.698,126.94 L1027.118,126.94 L1027.118,147.92 L1008.023,147.92 L1008.023,89.82 L775.365,89.82 L636.883,147.92 L517.958,147.92 L517.958,121.99 L496.74,121.99 L496.74,123.405 L347.497,123.405 L347.497,121.99 L322.073,121.99 L322.073,147.92 L303.235,147.92 C313.348,135.277 322.685,122.08 327.86,111.18 C333.967,110.595 340.59,109.642 347.497,108.425 C348.435,108.26 349.378,108.092 350.325,107.917 L350.325,120.575 L493.91,120.575 L493.91,100.987 L381.253,100.987 C384.27,100.207 387.27,99.4 390.255,98.575 L390.255,99.575 L459.26,99.575 L459.26,89.82 L418.86,89.82 C439.008,83.017 454.88,76.152 459.783,71.697 C472.247,60.362 470.818,27.452 470.08,17.637 L469.525,10.227 L462.103,9.8 C448.568,9.025 329.465,2.242 316.418,3.71 C305.497,4.922 263.595,30.452 184.997,80.292 C177.88,84.805 171.497,88.852 166.213,92.18 C129.012,115.605 127.298,141.087 126.048,159.695 C125.893,162.007 125.75,164.235 125.525,166.36 C124.608,175.045 123.543,186.455 122.303,199.665 C117.698,248.83 110.775,322.76 98.91,399.097 C85.978,408.967 48.055,439.12 43.7,456.545 C40.675,468.645 42.033,490.402 43.025,506.29 C43.363,511.692 43.773,518.322 43.67,520.585 C43.278,521.432 42.363,523.047 41.61,524.382 C38.06,530.655 32.118,541.152 29.875,555.34 C26.745,575.172 7.038,828.31 5.268,865.527 C3.493,902.817 10.158,968.375 35.793,996.15 C53.43,1015.252 102.03,1037.902 155.68,1037.9 C176.99,1037.9 199.105,1034.328 220.378,1025.532 C259.535,1009.352 272.108,980.81 275.77,968.882 C365.455,941.26 439.455,822.315 453.283,773.617 C454.307,773.907 455.295,774.185 456.258,774.447 C459.997,775.487 463.23,776.387 465.66,777.487 C482.918,785.302 578.143,817.847 613.357,817.845 L613.435,817.845 C626.56,817.827 640.825,800.5 645.422,784.962 C649.23,772.092 646.27,761.177 637.338,754.797 L1244.69,754.797 L1244.69,147.92" />
                    </g>
                  </svg>
                </a>
              </li>
              <div>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a className="navigation__list-item-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a
                    className="navigation__list-item-link"
                    href="#usedtechnologies"
                  >
                    Used Technologies
                  </a>
                </li>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a className="navigation__list-item-link" href="#galleries">
                    Reflections
                  </a>
                </li>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a className="navigation__list-item-link" href="#aboutme">
                    About Me
                  </a>
                </li>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a className="navigation__list-item-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="navigation__list-item navigation__list-item--mobile-hidden">
                  <a className="navigation__list-item-link" href="#getintouch">
                    Contact
                  </a>
                </li>
              </div>
              <li
                onClick={() => setIsOpen(!isOpen)} style={{ position: "fixed", float: "right", zIndex: "5000", right: "2rem"}}
                className="navigation__list-item navigation__list-item--menu BurgerMenu"
              >
                <label
                  className="navigation__list-item-link"
                  htmlFor="sidenav__opened"
                >
                  <svg className="another-icon" viewBox="0 0 512 512">
                    <g>
                      <path
                        d="M358.06,193.61H153.94c-3.83,0-6.93-3.1-6.93-6.93s3.1-6.93,6.93-6.93h204.13c3.83,0,6.93,3.1,6.93,6.93
                                        S361.89,193.61,358.06,193.61z"
                      />
                      <path
                        d="M358.06,262.93H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                        c3.83,0,6.93,3.1,6.93,6.93C365,259.83,361.89,262.93,358.06,262.93z"
                      />
                      <path
                        d="M358.06,332.25H153.94c-3.83,0-6.93-3.1-6.93-6.93c0-3.83,3.1-6.93,6.93-6.93h204.13
                                        c3.83,0,6.93,3.1,6.93,6.93C365,329.15,361.89,332.25,358.06,332.25z"
                      />
                      <path
                        d="M256,474.76c-120.62,0-218.76-98.14-218.76-218.76c0-120.63,98.14-218.76,218.76-218.76
                                        c120.63,0,218.76,98.14,218.76,218.76C474.76,376.62,376.62,474.76,256,474.76z M256,51.1C143.02,51.1,51.1,143.02,51.1,256
                                        S143.02,460.9,256,460.9S460.9,368.98,460.9,256S368.98,51.1,256,51.1z"
                      />
                    </g>
                  </svg>
                </label>
              </li>
            </ul>
          </nav>
          <div className="header__heading-container">
            <h1 className="header__heading-main">
              Roman <br />
              Jasiek
            </h1>
            <p className="header__heading-sub-main">Web Developer</p>
            {/* <p className="header__heading-sub-second">(In Training)</p> */}
          </div>
        </div>
        <div className="header__slope"></div>
      </header>
    </>
  );
};

export default Header;
