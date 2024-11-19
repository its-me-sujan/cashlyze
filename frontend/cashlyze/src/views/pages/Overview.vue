<template>
  <main class="mx-auto">
    <div class="row">
      <div class="col-lg-4 mt-3 px-lg-2 ps-xl-2">
        <div
          id="card_ov_summary"
          class="position-relative card p-0 card_overview_min_h px-3 card_hover"
        >
          <div class="noselect mt-2 pt-1"><b>Summary</b></div>

          <div class="flex justify-between mt-1">
            <div class="big_text_1">Balance:</div>
            <div
              id="ov_summary_balance"
              class="big_text_2"
              style="color: rgb(76, 175, 80)"
            >
              $13,627.71
            </div>
          </div>

          <div class="flex justify-between mt-1">
            <div class="big_text_1">Credit cards:</div>
            <div
              id="ov_summary_credit_cards"
              class="big_text_1"
              style="color: rgb(244, 67, 54)"
            >
              -$249.00
            </div>
          </div>

          <div class="flex">
            <div class="col-7"></div>
            <hr class="col my-1" />
          </div>

          <div class="flex ms-auto mb-1">
            <div
              id="ov_summary_total"
              class="big_text_1"
              style="color: rgb(76, 175, 80)"
            >
              $13,378.71
            </div>
          </div>

          <div
            class="loading_background flex align-content-center justify-content-center align-items-center hidden-element"
          >
            <div class="loading_container-general">
              <div class="loading_internal">
                <div class="loading_ballcolor loading_ball_1"></div>
              </div>
              <div class="loading_internal">
                <div class="loading_ballcolor loading_ball_2"></div>
              </div>
              <div class="loading_internal">
                <div class="loading_ballcolor loading_ball_3"></div>
              </div>
              <div class="loading_internal">
                <div class="loading_ballcolor loading_ball_4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-card class="q-ma-md q-pa-md hover:shadow-lg" bordered flat>
        <q-card-section>
          <div class="text-h6 text-black">Summary</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none">
          <div class="q-my-sm">
            <span class="text-body1">Balance:</span>
            <span class="text-green-6 float-right">$ balance </span>
          </div>
          <div class="q-my-sm">
            <span class="text-body1">Credit cards:</span>
            <span class="text-negative float-right">-$ creditCards </span>
          </div>
          <q-separator />
          <div class="q-my-sm">
            <span class="text-h6 text-green-6 float-right">$ total </span>
          </div>
        </q-card-section>
      </q-card>
      <!-- 
        <div class="col-lg-4 mt-3 px-lg-2">
          <div
            id="card_ov_s_this_month"
            class="card p-0 card_overview_min_h flex-row card_hover"
          >
            <div class="my-2 px-1 w-50">
              <canvas
                id="overview_s_this_month_canvas"
                height="153"
                style="
                  display: block;
                  box-sizing: border-box;
                  height: 122.4px;
                  width: 186.4px;
                  direction: ltr !important;
                "
                width="233"
              ></canvas>
            </div>

            <div
              class="flex flex-column w-100 pt-1 ps-0 pb-2 pe-3 noselect"
              id="card_ov_s_this_month_click"
            >
              <div class="mt-2 ms-1"><b>This month</b></div>

              <div class="d-flex justify-content-between mt-1">
                <i class="material-symbols-outlined income_up_icon"
                  >keyboard_arrow_up</i
                >
                <div
                  id="ov_this_month_incomes_val"
                  class="big_text_1 text-end"
                  style="color: rgb(76, 175, 80)"
                >
                  $50.00
                </div>
              </div>

              <div class="d-flex justify-content-between mt-1">
                <i class="material-symbols-outlined expense_down_icon"
                  >keyboard_arrow_down</i
                >
                <div
                  id="ov_this_month_expenses_val"
                  class="big_text_1 text-end"
                  style="color: rgb(244, 67, 54)"
                >
                  -$331.00
                </div>
              </div>

              <div class="d-flex">
                <div class="col-5"></div>
                <hr class="col my-1" />
              </div>

              <div class="d-flex justify-content-between">
                <div class=""></div>
                <div
                  id="ov_this_month_total_val"
                  class="big_text_1 text-end"
                  style="color: rgb(244, 67, 54)"
                >
                  -$281.00
                </div>
              </div>
            </div>

            <div
              class="loading_background d-flex align-content-center justify-content-center align-items-center hidden-element"
            >
              <div class="loading_container-general">
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_1"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_2"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_3"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mt-3 px-lg-2 pe-xl-2">
          <div
            id="card_ov_s_last_month"
            class="card p-0 card_overview_min_h flex-row card_hover"
          >
            <div class="my-2 px-1 w-50">
              <canvas
                id="overview_s_last_month_canvas"
                height="153"
                style="
                  display: block;
                  box-sizing: border-box;
                  height: 122.4px;
                  width: 186.4px;
                  direction: ltr !important;
                "
                width="233"
              ></canvas>
            </div>

            <div
              class="d-flex flex-column w-100 pt-1 ps-0 pb-2 pe-3 noselect"
              id="card_ov_s_last_month_click"
            >
              <div class="mt-2 ms-1"><b>Last month</b></div>

              <div class="d-flex justify-content-between mt-1">
                <i class="material-symbols-outlined income_up_icon"
                  >keyboard_arrow_up</i
                >
                <div
                  id="ov_last_month_incomes_val"
                  class="big_text_1 text-end"
                  style="color: rgb(76, 175, 80)"
                >
                  $1,402.00
                </div>
              </div>

              <div class="d-flex justify-content-between mt-1">
                <i class="material-symbols-outlined expense_down_icon"
                  >keyboard_arrow_down</i
                >
                <div
                  id="ov_last_month_expenses_val"
                  class="big_text_1 text-end"
                  style="color: rgb(244, 67, 54)"
                >
                  -$362.29
                </div>
              </div>

              <div class="d-flex">
                <div class="col-5"></div>
                <hr class="col my-1" />
              </div>

              <div class="d-flex justify-content-between">
                <div class=""></div>
                <div
                  id="ov_last_month_total_val"
                  class="big_text_1 text-end"
                  style="color: rgb(76, 175, 80)"
                >
                  $1,039.71
                </div>
              </div>
            </div>

            <div
              class="loading_background d-flex align-content-center justify-content-center align-items-center hidden-element"
            >
              <div class="loading_container-general">
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_1"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_2"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_3"></div>
                </div>
                <div class="loading_internal">
                  <div class="loading_ballcolor loading_ball_4"></div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
    </div>
    <!-- <div id="ov_widgets_container" class="row">
        <div class="col-md mb-2" id="ov_column_1">
          <div class="card mt-3 p-0 card_hover">
            <div class="d-flex justify-content-between noselect">
              <div
                id="card_ov_list_title"
                class="fw-bold mt-2 pt-1 px-2-5 px-sm-3"
              >
                Accounts
              </div>

              <div id="card_ov_list_options" class="card_options_btn mt-1 me-1">
                <i class="material-symbols-outlined">more_vert</i>
              </div>
            </div>

            <div id="card_ov_list" class="list-group px-2">
              <div class="d-flex" id="t_account_overview_container">
                <div class="w-100">
                  <div
                    class="d-flex justify-content-between pt-1 px-1 px-sm-2 pb-1"
                  >
                    <div class="">
                      <div id="t_account_ov_name" class="big_text_2">Wallet</div>
                      <div
                        id="t_account_ov_state"
                        class="small text-secondary hidden-element"
                      >
                        Hidden
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <div
                        id="t_account_ov_value"
                        class="text-end text-nowrap"
                        style="color: rgb(76, 175, 80)"
                      >
                        $90.24
                      </div>
                      <div
                        id="t_account_ov_currency"
                        class="text-end text-nowrap mt-auto"
                      >
                        USD - $
                      </div>
                    </div>
                  </div>

                  <hr id="t_account_ov_divider" class="divider px-3 mb-1" />
                </div>
              </div>

              <div class="d-flex" id="t_account_overview_container">
                <div class="w-100">
                  <div
                    class="d-flex justify-content-between pt-1 px-1 px-sm-2 pb-1"
                  >
                    <div class="">
                      <div id="t_account_ov_name" class="big_text_2">
                        Bank account
                      </div>
                      <div
                        id="t_account_ov_state"
                        class="small text-secondary hidden-element"
                      >
                        Hidden
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <div
                        id="t_account_ov_value"
                        class="text-end text-nowrap"
                        style="color: rgb(76, 175, 80)"
                      >
                        $13,537.47
                      </div>
                      <div
                        id="t_account_ov_currency"
                        class="text-end text-nowrap mt-auto"
                      >
                        USD - $
                      </div>
                    </div>
                  </div>

                  <hr
                    id="t_account_ov_divider"
                    class="divider px-3 mb-1 hidden-element"
                  />
                </div>
              </div>
            </div>

            <nav class="hidden-element">
              <ul class="pagination justify-content-end mt-1 me-2"></ul>
            </nav>
          </div>

          <div class="card mt-3 p-0 card_hover">
            <div class="d-flex justify-content-between noselect">
              <div
                id="card_ov_list_title"
                class="fw-bold mt-2 pt-1 px-2-5 px-sm-3"
              >
                Credit cards
              </div>

              <div id="card_ov_list_options" class="card_options_btn mt-1 me-1">
                <i class="material-symbols-outlined">more_vert</i>
              </div>
            </div>

            <div id="card_ov_list" class="list-group px-2">
              <div id="t_ccard_overview_container" class="d-flex flex-column">
                <div class="w-100 pt-1 px-1 px-sm-2 pb-2">
                  <div
                    class="d-flex flex_layout justify-content-between align-items-center"
                  >
                    <div id="t_ccard_overview_name" class="big_text_2">
                      Credit card
                    </div>
                    <div
                      id="t_ccard_overview_used_limit"
                      class="ms-auto text-nowrap"
                      style="color: rgb(244, 67, 54)"
                    >
                      -$155.00
                    </div>
                  </div>

                  <div class="d-flex flex_layout mt-1">
                    <div
                      class="progress_parent flex_layout py-2 me-1"
                      data-bs-toggle="tooltip"
                    >
                      <div class="progress flex_layout position-relative my-0">
                        <div
                          id="t_ccard_overview_progress"
                          class="progress-bar position-absolute top-0 start-0 h-100"
                          role="progressbar"
                          style="width: 15.5%; background-color: rgb(76, 175, 80)"
                        ></div>
                        <div
                          id="t_ccard_overview_progress_scheduled"
                          class="progress-bar position-absolute top-0 start-0 h-100"
                          role="progressbar"
                          style="
                            width: 15.5%;
                            opacity: 0.3;
                            background-color: rgb(76, 175, 80);
                          "
                        ></div>
                      </div>
                    </div>
                    <div
                      id="t_ccard_overview_percentage"
                      class="text-end text-nowrap"
                      style="min-width: 3rem; color: rgb(33, 33, 33)"
                    >
                      16%
                    </div>
                  </div>
                </div>

                <hr
                  id="t_ccard_overview_divider"
                  class="divider px-3 hidden-element"
                />
              </div>
            </div>

            <nav class="hidden-element">
              <ul class="pagination justify-content-end mt-1 me-2"></ul>
            </nav>
          </div>

          <div class="card mt-3 p-0 card_hover">
            <div class="d-flex justify-content-between noselect">
              <div class="mt-2 pt-1 px-3"><b>Last 7 days</b></div>

              <div
                id="overview_list_last_days_options"
                class="card_options_btn mt-1 me-1"
              >
                <i class="material-symbols-outlined">more_vert</i>
              </div>
            </div>

            <div class="w-100 mt-2 mb-2 pe-1 px-md-2">
              <canvas
                id="overview_last_days_chart"
                height="312"
                style="
                  display: block;
                  box-sizing: border-box;
                  height: 249.6px;
                  width: 568px;
                "
                width="710"
              ></canvas>
            </div>
          </div>

          <div class="card mt-3 p-0 card_hover">
            <div class="d-flex justify-content-between noselect">
              <div
                id="card_ov_list_title"
                class="fw-bold mt-2 pt-1 px-2-5 px-sm-3"
              >
                Transactions
              </div>

              <div id="card_ov_list_options" class="card_options_btn mt-1 me-1">
                <i class="material-symbols-outlined">more_vert</i>
              </div>
            </div>

            <div id="card_ov_list" class="list-group px-2">
              <div id="t_transaction_container" class="">
                <div
                  class="d-flex justify-content-between align-items-center w-100 py-1 ps-1 ps-md-2 pe-1"
                >
                  <div
                    id="template_tr_box_parent"
                    class="form-check ms-1 me-2 hidden-element"
                  >
                    <input
                      id="template_tr_box"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label
                      id="template_tr_box_label"
                      class="form-check-label"
                      for="template_tr_box"
                    ></label>
                  </div>

                  <div class="position-relative tr_icon_container">
                    <div class="tr_icon_container_inner">
                      <div class="tr_icon_front">
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                        />
                      </div>
                      <div class="tr_icon_back">
                        <img draggable="false" class="transaction_icon" alt="" />
                      </div>
                    </div>

                    <img
                      id="t_tr_icon_unchecked"
                      draggable="false"
                      class="tr_checked_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />

                    <img
                      id="t_tr_file_attached"
                      draggable="false"
                      class="tr_attachment_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />
                  </div>

                  <div class="flex_layout" data-bs-toggle="collapse">
                    <div class="d-flex justify-content-between">
                      <div id="template_tr_category" class="text-start me-2">
                        Bar
                      </div>
                      <div id="template_tr_value">-$2.00</div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <div id="template_tr_account" class="me-2">Wallet</div>
                      <div id="template_tr_date" class="text-end text-nowrap">
                        10/09/2024
                      </div>
                    </div>
                  </div>

                  <div
                    class="dropdown menu_holder hidden-element"
                    id="template_tr_options"
                    style="visibility: hidden"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="template_tr_options_btn"
                      data-bs-toggle="dropdown"
                    >
                      <i
                        class="material-symbols-outlined"
                        id="template_tr_options_btn_icon"
                        >more_vert</i
                      >
                    </div>
                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_repeat_now"
                      >
                        Repeat now
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_skip_repetition"
                      >
                        Skip repetition
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_confirm_pending_tr"
                      >
                        Confirm
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_duplicate"
                      >
                        Duplicate transaction
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_edit"
                      >
                        Edit transaction
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_refund"
                      >
                        Refund
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_delete"
                      >
                        Delete transaction
                      </button>
                    </div>
                  </div>

                  <div class="menu_holder hidden-element">
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="t_tr_pending_conf_confirm_btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Confirm"
                    >
                      <i class="material-symbols-outlined">check</i>
                    </div>
                  </div>

                  <div
                    id="template_tr_color"
                    class="lateral_band ms-1 ms-md-2 noselect ms-2 ms-lg-3"
                    style="background-color: rgb(244, 67, 54)"
                  ></div>
                </div>

                <div class="collapse" id="tra0-6">
                  <pre
                    id="template_tr_scheduled_details"
                    class="text-center mx-4 my-1 hidden-element"
                  ></pre>

                  <div class="d-flex justify-content-between mx-3 mx-md-4 my-1">
                    <div id="template_tr_from_to" class="me-3">-</div>
                    <div id="template_tr_notes">-</div>
                  </div>
                  <div
                    id="t_tr_multicat_container"
                    class="d-flex flex-column w-75 w-md-50 mx-auto"
                  ></div>
                  <div
                    id="template_tr_added_from"
                    class="d-flex justify-content-center mx-4 my-1"
                  ></div>
                  <div
                    id="template_tr_is_pending"
                    class="d-flex justify-content-center mx-4 my-1 text-secondary hidden-element"
                  >
                    This transaction is awaiting confirmation from your bank
                  </div>

                  <button
                    type="button"
                    id="template_tr_checked_btn"
                    class="btn_general btn_red d-flex justify-content-center mx-auto mb-2 hidden-element"
                  >
                    Checked
                  </button>

                  <div class="d-flex justify-content-center">
                    <button
                      id="button_tr_download_attachment"
                      class="btn_flat mb-1 hidden-element"
                    >
                      Photo (Dropbox)
                    </button>
                  </div>
                  <div
                    class="progress mx-3 mb-2 hidden-element"
                    id="template_tr_photo_waiting"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 100%"
                    ></div>
                  </div>
                  <img
                    id="template_tr_photo_img"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                    src="#"
                  />
                  <div
                    id="template_tr_pdf_container"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                  ></div>
                  <div
                    id="template_tr_attachment_not_found"
                    class="d-flex justify-content-center mx-4 pb-2 hidden-element"
                  >
                    Photo not found
                  </div>
                </div>
              </div>

              <div id="t_transaction_container" class="">
                <div
                  class="d-flex justify-content-between align-items-center w-100 py-1 ps-1 ps-md-2 pe-1"
                >
                  <div
                    id="template_tr_box_parent"
                    class="form-check ms-1 me-2 hidden-element"
                  >
                    <input
                      id="template_tr_box"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label
                      id="template_tr_box_label"
                      class="form-check-label"
                      for="template_tr_box"
                    ></label>
                  </div>

                  <div class="position-relative tr_icon_container">
                    <div class="tr_icon_container_inner">
                      <div class="tr_icon_front">
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                        />
                      </div>
                      <div class="tr_icon_back">
                        <img draggable="false" class="transaction_icon" alt="" />
                      </div>
                    </div>

                    <img
                      id="t_tr_icon_unchecked"
                      draggable="false"
                      class="tr_checked_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />

                    <img
                      id="t_tr_file_attached"
                      draggable="false"
                      class="tr_attachment_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />
                  </div>

                  <div class="flex_layout" data-bs-toggle="collapse">
                    <div class="d-flex justify-content-between">
                      <div id="template_tr_category" class="text-start me-2">
                        Entertainment
                      </div>
                      <div id="template_tr_value">-$8.00</div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <div id="template_tr_account" class="me-2">Wallet</div>
                      <div id="template_tr_date" class="text-end text-nowrap">
                        10/08/2024
                      </div>
                    </div>
                  </div>

                  <div
                    class="dropdown menu_holder hidden-element"
                    id="template_tr_options"
                    style="visibility: hidden"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="template_tr_options_btn"
                      data-bs-toggle="dropdown"
                    >
                      <i
                        class="material-symbols-outlined"
                        id="template_tr_options_btn_icon"
                        >more_vert</i
                      >
                    </div>
                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_repeat_now"
                      >
                        Repeat now
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_skip_repetition"
                      >
                        Skip repetition
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_confirm_pending_tr"
                      >
                        Confirm
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_duplicate"
                      >
                        Duplicate transaction
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_edit"
                      >
                        Edit transaction
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_refund"
                      >
                        Refund
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_delete"
                      >
                        Delete transaction
                      </button>
                    </div>
                  </div>

                  <div class="menu_holder hidden-element">
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="t_tr_pending_conf_confirm_btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Confirm"
                    >
                      <i class="material-symbols-outlined">check</i>
                    </div>
                  </div>

                  <div
                    id="template_tr_color"
                    class="lateral_band ms-1 ms-md-2 noselect ms-2 ms-lg-3"
                    style="background-color: rgb(244, 67, 54)"
                  ></div>
                </div>

                <div class="collapse" id="tra0-8">
                  <pre
                    id="template_tr_scheduled_details"
                    class="text-center mx-4 my-1 hidden-element"
                  ></pre>

                  <div class="d-flex justify-content-between mx-3 mx-md-4 my-1">
                    <div id="template_tr_from_to" class="me-3">-</div>
                    <div id="template_tr_notes">-</div>
                  </div>
                  <div
                    id="t_tr_multicat_container"
                    class="d-flex flex-column w-75 w-md-50 mx-auto"
                  ></div>
                  <div
                    id="template_tr_added_from"
                    class="d-flex justify-content-center mx-4 my-1"
                  ></div>
                  <div
                    id="template_tr_is_pending"
                    class="d-flex justify-content-center mx-4 my-1 text-secondary hidden-element"
                  >
                    This transaction is awaiting confirmation from your bank
                  </div>

                  <button
                    type="button"
                    id="template_tr_checked_btn"
                    class="btn_general btn_red d-flex justify-content-center mx-auto mb-2 hidden-element"
                  >
                    Checked
                  </button>

                  <div class="d-flex justify-content-center">
                    <button
                      id="button_tr_download_attachment"
                      class="btn_flat mb-1 hidden-element"
                    >
                      Photo (Dropbox)
                    </button>
                  </div>
                  <div
                    class="progress mx-3 mb-2 hidden-element"
                    id="template_tr_photo_waiting"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 100%"
                    ></div>
                  </div>
                  <img
                    id="template_tr_photo_img"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                    src="#"
                  />
                  <div
                    id="template_tr_pdf_container"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                  ></div>
                  <div
                    id="template_tr_attachment_not_found"
                    class="d-flex justify-content-center mx-4 pb-2 hidden-element"
                  >
                    Photo not found
                  </div>
                </div>
              </div>

              <div id="t_transaction_container" class="">
                <div
                  class="d-flex justify-content-between align-items-center w-100 py-1 ps-1 ps-md-2 pe-1"
                >
                  <div
                    id="template_tr_box_parent"
                    class="form-check ms-1 me-2 hidden-element"
                  >
                    <input
                      id="template_tr_box"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label
                      id="template_tr_box_label"
                      class="form-check-label"
                      for="template_tr_box"
                    ></label>
                  </div>

                  <div class="position-relative tr_icon_container">
                    <div class="tr_icon_container_inner">
                      <div class="tr_icon_front">
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                        />
                      </div>
                      <div class="tr_icon_back">
                        <img draggable="false" class="transaction_icon" alt="" />
                      </div>
                    </div>

                    <img
                      id="t_tr_icon_unchecked"
                      draggable="false"
                      class="tr_checked_icon"
                      alt=""
                      data-bs-toggle="collapse"
                    />

                    <img
                      id="t_tr_file_attached"
                      draggable="false"
                      class="tr_attachment_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />
                  </div>

                  <div class="flex_layout" data-bs-toggle="collapse">
                    <div class="d-flex justify-content-between">
                      <div id="template_tr_category" class="text-start me-2">
                        Eating out
                      </div>
                      <div id="template_tr_value">-$16.00</div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <div id="template_tr_account" class="me-2">Credit card</div>
                      <div id="template_tr_date" class="text-end text-nowrap">
                        10/08/2024
                      </div>
                    </div>
                  </div>

                  <div
                    class="dropdown menu_holder hidden-element"
                    id="template_tr_options"
                    style="visibility: hidden"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="template_tr_options_btn"
                      data-bs-toggle="dropdown"
                    >
                      <i
                        class="material-symbols-outlined"
                        id="template_tr_options_btn_icon"
                        >more_vert</i
                      >
                    </div>
                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_repeat_now"
                      >
                        Repeat now
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_skip_repetition"
                      >
                        Skip repetition
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_confirm_pending_tr"
                      >
                        Confirm
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_duplicate"
                      >
                        Duplicate transaction
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_edit"
                      >
                        Edit transaction
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_refund"
                      >
                        Refund
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_delete"
                      >
                        Delete transaction
                      </button>
                    </div>
                  </div>

                  <div class="menu_holder hidden-element">
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="t_tr_pending_conf_confirm_btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Confirm"
                    >
                      <i class="material-symbols-outlined">check</i>
                    </div>
                  </div>

                  <div
                    id="template_tr_color"
                    class="lateral_band ms-1 ms-md-2 noselect ms-2 ms-lg-3"
                    style="background-color: rgb(244, 67, 54)"
                  ></div>
                </div>

                <div class="collapse" id="tra0-7">
                  <pre
                    id="template_tr_scheduled_details"
                    class="text-center mx-4 my-1 hidden-element"
                  ></pre>

                  <div class="d-flex justify-content-between mx-3 mx-md-4 my-1">
                    <div id="template_tr_from_to" class="me-3">-</div>
                    <div id="template_tr_notes">-</div>
                  </div>
                  <div
                    id="t_tr_multicat_container"
                    class="d-flex flex-column w-75 w-md-50 mx-auto"
                  ></div>
                  <div
                    id="template_tr_added_from"
                    class="d-flex justify-content-center mx-4 my-1"
                  ></div>
                  <div
                    id="template_tr_is_pending"
                    class="d-flex justify-content-center mx-4 my-1 text-secondary hidden-element"
                  >
                    This transaction is awaiting confirmation from your bank
                  </div>

                  <button
                    type="button"
                    id="template_tr_checked_btn"
                    class="btn_general d-flex justify-content-center mx-auto mb-2 btn_red"
                  >
                    Checked
                  </button>

                  <div class="d-flex justify-content-center">
                    <button
                      id="button_tr_download_attachment"
                      class="btn_flat mb-1 hidden-element"
                    >
                      Photo (Dropbox)
                    </button>
                  </div>
                  <div
                    class="progress mx-3 mb-2 hidden-element"
                    id="template_tr_photo_waiting"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 100%"
                    ></div>
                  </div>
                  <img
                    id="template_tr_photo_img"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                    src="#"
                  />
                  <div
                    id="template_tr_pdf_container"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                  ></div>
                  <div
                    id="template_tr_attachment_not_found"
                    class="d-flex justify-content-center mx-4 pb-2 hidden-element"
                  >
                    Photo not found
                  </div>
                </div>
              </div>

              <div id="t_transaction_container" class="">
                <div
                  class="d-flex justify-content-between align-items-center w-100 py-1 ps-1 ps-md-2 pe-1"
                >
                  <div
                    id="template_tr_box_parent"
                    class="form-check ms-1 me-2 hidden-element"
                  >
                    <input
                      id="template_tr_box"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label
                      id="template_tr_box_label"
                      class="form-check-label"
                      for="template_tr_box"
                    ></label>
                  </div>

                  <div class="position-relative tr_icon_container">
                    <div class="tr_icon_container_inner">
                      <div class="tr_icon_front">
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                          style="
                            width: 34px;
                            height: 34px;
                            position: absolute;
                            top: 14px;
                            left: 14px;
                          "
                        />
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                          style="
                            width: 34px;
                            height: 34px;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                          "
                        />
                      </div>
                      <div class="tr_icon_back">
                        <img draggable="false" class="transaction_icon" alt="" />
                      </div>
                    </div>

                    <img
                      id="t_tr_icon_unchecked"
                      draggable="false"
                      class="tr_checked_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />

                    <img
                      id="t_tr_file_attached"
                      draggable="false"
                      class="tr_attachment_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />
                  </div>

                  <div class="flex_layout" data-bs-toggle="collapse">
                    <div class="d-flex justify-content-between">
                      <div id="template_tr_category" class="text-start me-2">
                        Shopping, Food - Pets
                      </div>
                      <div id="template_tr_value">-$50.00</div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <div id="template_tr_account" class="me-2">Credit card</div>
                      <div id="template_tr_date" class="text-end text-nowrap">
                        10/07/2024
                      </div>
                    </div>
                  </div>

                  <div
                    class="dropdown menu_holder hidden-element"
                    id="template_tr_options"
                    style="visibility: hidden"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="template_tr_options_btn"
                      data-bs-toggle="dropdown"
                    >
                      <i
                        class="material-symbols-outlined"
                        id="template_tr_options_btn_icon"
                        >more_vert</i
                      >
                    </div>
                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_repeat_now"
                      >
                        Repeat now
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_skip_repetition"
                      >
                        Skip repetition
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_confirm_pending_tr"
                      >
                        Confirm
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_duplicate"
                      >
                        Duplicate transaction
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_edit"
                      >
                        Edit transaction
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_refund"
                      >
                        Refund
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_delete"
                      >
                        Delete transaction
                      </button>
                    </div>
                  </div>

                  <div class="menu_holder hidden-element">
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="t_tr_pending_conf_confirm_btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Confirm"
                    >
                      <i class="material-symbols-outlined">check</i>
                    </div>
                  </div>

                  <div
                    id="template_tr_color"
                    class="lateral_band ms-1 ms-md-2 noselect ms-2 ms-lg-3"
                    style="background-color: rgb(244, 67, 54)"
                  ></div>
                </div>

                <div class="collapse" id="tra0-9">
                  <pre
                    id="template_tr_scheduled_details"
                    class="text-center mx-4 my-1 hidden-element"
                  ></pre>

                  <div class="d-flex justify-content-between mx-3 mx-md-4 my-1">
                    <div id="template_tr_from_to" class="me-3">-</div>
                    <div id="template_tr_notes">-</div>
                  </div>
                  <div
                    id="t_tr_multicat_container"
                    class="d-flex flex-column w-75 w-md-50 mx-auto"
                  >
                    <div
                      class="d-flex align-items-center"
                      style="margin-bottom: 2px"
                    >
                      <img
                        draggable="false"
                        class="transaction_icon"
                        alt=""
                        style="width: 24px; height: 24px"
                      />
                      <div class="text-start me-2">Shopping</div>
                      <div class="ms-auto">-$35.00</div>
                    </div>
                    <div
                      class="d-flex align-items-center"
                      style="margin-bottom: 2px"
                    >
                      <img
                        draggable="false"
                        class="transaction_icon"
                        alt=""
                        style="width: 24px; height: 24px"
                      />
                      <div class="text-start me-2">Food - Pets</div>
                      <div class="ms-auto">-$15.00</div>
                    </div>
                  </div>
                  <div
                    id="template_tr_added_from"
                    class="d-flex justify-content-center mx-4 my-1"
                  ></div>
                  <div
                    id="template_tr_is_pending"
                    class="d-flex justify-content-center mx-4 my-1 text-secondary hidden-element"
                  >
                    This transaction is awaiting confirmation from your bank
                  </div>

                  <button
                    type="button"
                    id="template_tr_checked_btn"
                    class="btn_general btn_red d-flex justify-content-center mx-auto mb-2 hidden-element"
                  >
                    Checked
                  </button>

                  <div class="d-flex justify-content-center">
                    <button
                      id="button_tr_download_attachment"
                      class="btn_flat mb-1 hidden-element"
                    >
                      Photo (Dropbox)
                    </button>
                  </div>
                  <div
                    class="progress mx-3 mb-2 hidden-element"
                    id="template_tr_photo_waiting"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 100%"
                    ></div>
                  </div>
                  <img
                    id="template_tr_photo_img"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                    src="#"
                  />
                  <div
                    id="template_tr_pdf_container"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                  ></div>
                  <div
                    id="template_tr_attachment_not_found"
                    class="d-flex justify-content-center mx-4 pb-2 hidden-element"
                  >
                    Photo not found
                  </div>
                </div>
              </div>

              <div id="t_transaction_container" class="">
                <div
                  class="d-flex justify-content-between align-items-center w-100 py-1 ps-1 ps-md-2 pe-1"
                >
                  <div
                    id="template_tr_box_parent"
                    class="form-check ms-1 me-2 hidden-element"
                  >
                    <input
                      id="template_tr_box"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label
                      id="template_tr_box_label"
                      class="form-check-label"
                      for="template_tr_box"
                    ></label>
                  </div>

                  <div class="position-relative tr_icon_container">
                    <div class="tr_icon_container_inner">
                      <div class="tr_icon_front">
                        <img
                          id="template_tr_icon_category"
                          draggable="false"
                          class="transaction_icon"
                          alt=""
                          data-bs-toggle="collapse"
                        />
                      </div>
                      <div class="tr_icon_back">
                        <img draggable="false" class="transaction_icon" alt="" />
                      </div>
                    </div>

                    <img
                      id="t_tr_icon_unchecked"
                      draggable="false"
                      class="tr_checked_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />

                    <img
                      id="t_tr_file_attached"
                      draggable="false"
                      class="tr_attachment_icon hidden-element"
                      alt=""
                      data-bs-toggle="collapse"
                    />
                  </div>

                  <div class="flex_layout" data-bs-toggle="collapse">
                    <div class="d-flex justify-content-between">
                      <div id="template_tr_category" class="text-start me-2">
                        Fuel
                      </div>
                      <div id="template_tr_value">-$30.00</div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <div id="template_tr_account" class="me-2">Wallet</div>
                      <div id="template_tr_date" class="text-end text-nowrap">
                        10/06/2024
                      </div>
                    </div>
                  </div>

                  <div
                    class="dropdown menu_holder hidden-element"
                    id="template_tr_options"
                    style="visibility: hidden"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="template_tr_options_btn"
                      data-bs-toggle="dropdown"
                    >
                      <i
                        class="material-symbols-outlined"
                        id="template_tr_options_btn_icon"
                        >more_vert</i
                      >
                    </div>
                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_repeat_now"
                      >
                        Repeat now
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_skip_repetition"
                      >
                        Skip repetition
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_confirm_pending_tr"
                      >
                        Confirm
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_duplicate"
                      >
                        Duplicate transaction
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_edit"
                      >
                        Edit transaction
                      </button>
                      <button
                        class="dropdown-item hidden-element"
                        type="button"
                        id="t_tr_options_refund"
                      >
                        Refund
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        id="t_tr_options_delete"
                      >
                        Delete transaction
                      </button>
                    </div>
                  </div>

                  <div class="menu_holder hidden-element">
                    <div
                      class="d-flex align-items-center justify-content-center item_options noselect"
                      id="t_tr_pending_conf_confirm_btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Confirm"
                    >
                      <i class="material-symbols-outlined">check</i>
                    </div>
                  </div>

                  <div
                    id="template_tr_color"
                    class="lateral_band ms-1 ms-md-2 noselect ms-2 ms-lg-3"
                    style="background-color: rgb(244, 67, 54)"
                  ></div>
                </div>

                <div class="collapse" id="tra0-10">
                  <pre
                    id="template_tr_scheduled_details"
                    class="text-center mx-4 my-1 hidden-element"
                  ></pre>

                  <div class="d-flex justify-content-between mx-3 mx-md-4 my-1">
                    <div id="template_tr_from_to" class="me-3">-</div>
                    <div id="template_tr_notes">-</div>
                  </div>
                  <div
                    id="t_tr_multicat_container"
                    class="d-flex flex-column w-75 w-md-50 mx-auto"
                  ></div>
                  <div
                    id="template_tr_added_from"
                    class="d-flex justify-content-center mx-4 my-1"
                  ></div>
                  <div
                    id="template_tr_is_pending"
                    class="d-flex justify-content-center mx-4 my-1 text-secondary hidden-element"
                  >
                    This transaction is awaiting confirmation from your bank
                  </div>

                  <button
                    type="button"
                    id="template_tr_checked_btn"
                    class="btn_general btn_red d-flex justify-content-center mx-auto mb-2 hidden-element"
                  >
                    Checked
                  </button>

                  <div class="d-flex justify-content-center">
                    <button
                      id="button_tr_download_attachment"
                      class="btn_flat mb-1 hidden-element"
                    >
                      Photo (Dropbox)
                    </button>
                  </div>
                  <div
                    class="progress mx-3 mb-2 hidden-element"
                    id="template_tr_photo_waiting"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 100%"
                    ></div>
                  </div>
                  <img
                    id="template_tr_photo_img"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                    src="#"
                  />
                  <div
                    id="template_tr_pdf_container"
                    draggable="false"
                    class="mt-2 mb-3 w-100 cursor_default hidden-element"
                  ></div>
                  <div
                    id="template_tr_attachment_not_found"
                    class="d-flex justify-content-center mx-4 pb-2 hidden-element"
                  >
                    Photo not found
                  </div>
                </div>
              </div>
            </div>

            <nav class="hidden-element">
              <ul class="pagination justify-content-end mt-1 me-2"></ul>
            </nav>
          </div>
        </div>

        <div class="col-md mb-2" id="ov_column_2">
          <div class="card mt-3 p-0">
            <div class="d-flex justify-content-between noselect">
              <div class="mt-2 pt-1 px-3"><b>Balance</b></div>
            </div>

            <div class="w-100 mt-3 mb-1 pe-1 ps-md-2">
              <canvas
                id="overview_balance_chart"
                height="312"
                style="
                  display: block;
                  box-sizing: border-box;
                  height: 249.6px;
                  width: 572px;
                "
                width="715"
              ></canvas>
            </div>
          </div>

          <div class="card mt-3 p-0 card_hover">
            <div class="d-flex justify-content-between noselect">
              <div
                id="card_ov_list_title"
                class="fw-bold mt-2 pt-1 px-2-5 px-sm-3"
              >
                Budgets
              </div>

              <div id="card_ov_list_options" class="card_options_btn mt-1 me-1">
                <i class="material-symbols-outlined">more_vert</i>
              </div>
            </div>

            <div id="card_ov_list" class="list-group px-2">
              <div class="d-flex w-100 noselect" id="t_budget_container">
                <div class="d-flex flex-column flex_layout px-1 px-sm-2 pb-1">
                  <div class="d-flex align-items-center">
                    <div id="t_budget_name" class="big_text_2">Entertainment</div>
                    <div id="t_budget_account" class="ms-2"></div>
                  </div>

                  <div class="d-flex flex_layout align-items-center">
                    <img
                      id="t_budget_icon"
                      draggable="false"
                      class="transaction_icon"
                      alt=""
                    />

                    <div class="d-flex flex-column flex_layout ms-1">
                      <div class="d-flex flex_layout justify-content-between">
                        <div id="t_budget_date_from" class="small_text">
                          10/07/2024
                        </div>
                        <div
                          id="t_budget_limit_percentage"
                          class="small_text"
                          style="color: rgb(33, 33, 33)"
                        >
                          27%
                        </div>
                        <div id="t_budget_date_to" class="small_text">
                          10/13/2024
                        </div>
                      </div>

                      <div class="d-flex flex_layout">
                        <div class="progress_parent flex_layout mx-2 my-1">
                          <div
                            class="progress flex_layout position-relative my-0"
                          >
                            <div
                              id="t_budget_progress"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 26.6667%;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_progress_scheduled"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 26.6667%;
                                opacity: 0.3;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_vertical_line"
                              class="position-absolute top-0 start-0 h-100"
                              style="
                                margin-left: 0px;
                                background-color: rgb(33, 33, 33);
                                width: 2px;
                                margin-inline-start: 34.5352%;
                              "
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="d-flex flex_layout justify-content-between mt-1"
                      >
                        <div id="t_budget_zero_value" class="small_text">
                          $0.00
                        </div>
                        <div id="t_budget_current_value" class="">$8.00</div>
                        <div id="t_budget_max_value" class="small_text">
                          $30.00
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex mb-1 hidden-element" id="t_budget_buttons">
                    <div
                      id="t_budget_residual_amount"
                      class="align-self-center me-auto small_text mt-1"
                    >
                      Residual amount: $22.00
                    </div>

                    <div id="t_budget_options" class="d-flex noselect">
                      <div class="item_small_button" id="t_budget_options_edit">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >edit</i
                        >
                      </div>

                      <div class="item_small_button" id="t_budget_options_delete">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >delete</i
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex w-100 noselect" id="t_budget_container">
                <div class="d-flex flex-column flex_layout px-1 px-sm-2 pb-1">
                  <div class="d-flex align-items-center">
                    <div id="t_budget_name" class="big_text_2">Eating out</div>
                    <div id="t_budget_account" class="ms-2"></div>
                  </div>

                  <div class="d-flex flex_layout align-items-center">
                    <img
                      id="t_budget_icon"
                      draggable="false"
                      class="transaction_icon"
                      alt=""
                    />

                    <div class="d-flex flex-column flex_layout ms-1">
                      <div class="d-flex flex_layout justify-content-between">
                        <div id="t_budget_date_from" class="small_text">
                          10/01/2024
                        </div>
                        <div
                          id="t_budget_limit_percentage"
                          class="small_text"
                          style="color: rgb(33, 33, 33)"
                        >
                          30%
                        </div>
                        <div id="t_budget_date_to" class="small_text">
                          10/31/2024
                        </div>
                      </div>

                      <div class="d-flex flex_layout">
                        <div class="progress_parent flex_layout mx-2 my-1">
                          <div
                            class="progress flex_layout position-relative my-0"
                          >
                            <div
                              id="t_budget_progress"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 29.5%;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_progress_scheduled"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 29.5%;
                                opacity: 0.3;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_vertical_line"
                              class="position-absolute top-0 start-0 h-100"
                              style="
                                margin-left: 0px;
                                background-color: rgb(33, 33, 33);
                                width: 2px;
                                margin-inline-start: 27.1531%;
                              "
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="d-flex flex_layout justify-content-between mt-1"
                      >
                        <div id="t_budget_zero_value" class="small_text">
                          $0.00
                        </div>
                        <div id="t_budget_current_value" class="">$29.50</div>
                        <div id="t_budget_max_value" class="small_text">
                          $100.00
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex mb-1 hidden-element" id="t_budget_buttons">
                    <div
                      id="t_budget_residual_amount"
                      class="align-self-center me-auto small_text mt-1"
                    >
                      Residual amount: $70.50
                    </div>

                    <div id="t_budget_options" class="d-flex noselect">
                      <div class="item_small_button" id="t_budget_options_edit">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >edit</i
                        >
                      </div>

                      <div class="item_small_button" id="t_budget_options_delete">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >delete</i
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex w-100 noselect" id="t_budget_container">
                <div class="d-flex flex-column flex_layout px-1 px-sm-2 pb-1">
                  <div class="d-flex align-items-center">
                    <div id="t_budget_name" class="big_text_2">Fuel</div>
                    <div id="t_budget_account" class="ms-2"></div>
                  </div>

                  <div class="d-flex flex_layout align-items-center">
                    <img
                      id="t_budget_icon"
                      draggable="false"
                      class="transaction_icon"
                      alt=""
                    />

                    <div class="d-flex flex-column flex_layout ms-1">
                      <div class="d-flex flex_layout justify-content-between">
                        <div id="t_budget_date_from" class="small_text">
                          10/01/2024
                        </div>
                        <div
                          id="t_budget_limit_percentage"
                          class="small_text"
                          style="color: rgb(33, 33, 33)"
                        >
                          25%
                        </div>
                        <div id="t_budget_date_to" class="small_text">
                          10/31/2024
                        </div>
                      </div>

                      <div class="d-flex flex_layout">
                        <div class="progress_parent flex_layout mx-2 my-1">
                          <div
                            class="progress flex_layout position-relative my-0"
                          >
                            <div
                              id="t_budget_progress"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 25%;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_progress_scheduled"
                              class="progress-bar position-absolute top-0 start-0 h-100"
                              role="progressbar"
                              style="
                                width: 25%;
                                opacity: 0.3;
                                background-color: rgb(76, 175, 80);
                              "
                            ></div>
                            <div
                              id="t_budget_vertical_line"
                              class="position-absolute top-0 start-0 h-100"
                              style="
                                margin-left: 0px;
                                background-color: rgb(33, 33, 33);
                                width: 2px;
                                margin-inline-start: 27.1531%;
                              "
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="d-flex flex_layout justify-content-between mt-1"
                      >
                        <div id="t_budget_zero_value" class="small_text">
                          $0.00
                        </div>
                        <div id="t_budget_current_value" class="">$30.00</div>
                        <div id="t_budget_max_value" class="small_text">
                          $120.00
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex mb-1 hidden-element" id="t_budget_buttons">
                    <div
                      id="t_budget_residual_amount"
                      class="align-self-center me-auto small_text mt-1"
                    >
                      Residual amount: $90.00
                    </div>

                    <div id="t_budget_options" class="d-flex noselect">
                      <div class="item_small_button" id="t_budget_options_edit">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >edit</i
                        >
                      </div>

                      <div class="item_small_button" id="t_budget_options_delete">
                        <i
                          class="material-symbols-outlined material-symbols-outlined-30px align-self-center"
                          >delete</i
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav class="hidden-element">
              <ul class="pagination justify-content-end mt-1 me-2"></ul>
            </nav>
          </div>

          <div class="card card_overview_min_h mt-3 p-0">
            <div class="d-flex justify-content-between noselect">
              <div class="mt-2 pt-1 px-3"><b>Cash flow (Transactions)</b></div>
            </div>

            <table
              class="table table-striped table-sm table-responsive-lg cursor_default mt-1 mb-1"
            >
              <thead>
                <tr class="text-center">
                  <td>
                    <div class="d-flex">
                      <div class="d-flex align-items-center mx-auto">
                        <div
                          class="d-flex justify-content-center align-items-center button_icon small"
                          id="ov_cash_flow_btn_previous_month"
                        >
                          <i class="material-symbols-outlined"
                            >keyboard_arrow_left</i
                          >
                        </div>

                        <div
                          id="ov_cash_flow_period"
                          style="font-size: 0.9rem; min-width: 140px"
                        >
                          October 2024
                        </div>

                        <div
                          class="d-flex justify-content-center align-items-center button_icon small"
                          id="ov_cash_flow_btn_next_month"
                        >
                          <i class="material-symbols-outlined"
                            >keyboard_arrow_right</i
                          >
                        </div>
                      </div>
                    </div>
                  </td>
                  <th scope="col">Income</th>
                  <th scope="col">Expenses</th>
                </tr>
              </thead>
              <tbody
                class="table-group-divider text-end"
                id="card_ov_cash_flow_tbody"
              >
                <tr>
                  <td class="text-start border-end" style="padding-left: 0.8rem">
                    Total
                  </td>
                  <td class="border-end" style="">$50.00</td>
                  <td style="padding-right: 0.8rem">-$331.00</td>
                </tr>
                <tr>
                  <td class="text-start border-end" style="padding-left: 0.8rem">
                    Transactions
                  </td>
                  <td class="border-end">1</td>
                  <td style="padding-right: 0.8rem">10</td>
                </tr>
                <tr>
                  <td class="text-start border-end" style="padding-left: 0.8rem">
                    Average (Day)
                  </td>
                  <td class="border-end">$1.61</td>
                  <td style="padding-right: 0.8rem">-$10.68</td>
                </tr>
                <tr>
                  <td class="text-start border-end" style="padding-left: 0.8rem">
                    Average (Transactions)
                  </td>
                  <td class="border-end">$50.00</td>
                  <td style="padding-right: 0.8rem">-$33.10</td>
                </tr>
              </tbody>
            </table>

            <div class="d-flex mb-2" style="padding: 0 0.8rem">
              <small id="card_ov_cash_flow_period" class="text-secondary"></small>
              <div id="card_ov_cash_flow_total" class="mt-1 ms-auto">
                Total: <span style="color: #f44336">-$281.00</span>
              </div>
            </div>
          </div>

          <div
            class="card d-flex full_centered widget_selection_card item_selector_light mt-3 p-0"
          >
            <button class="btn btn_fab my-3 mx-0">
              <i class="material-symbols-outlined">edit</i>
            </button>
          </div>
        </div>

        <div class="col-md mb-2 hidden-element" id="ov_column_3"></div>
      </div> -->
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
