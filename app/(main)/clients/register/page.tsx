"use client";
import { Form } from "@/components/ui/form";
import { StepIndicator } from "@/features/clients/components/StepIndicator";
import { useClientRegistrationForm } from "@/features/clients/hooks/use-client-registration-form";
import React from "react";
import { motion } from "framer-motion";
import FamilyInformation from "@/features/clients/components/steps/FamilyInformation";
import PensionersInformation from "@/features/clients/components/steps/PensionersInformation";
import AccountsInformation from "@/features/clients/components/steps/AccountsInformation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eraser, FileUp, Save, Trash2 } from "lucide-react";
import { steps } from "@/features/clients/components/lib/client-registration-form";
import ClientGeneralInformation from "@/features/clients/components/steps/ClientGeneralInformation";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import BreadcrumbPages from "@/components/BreadcrumbPages";

export default function RegisterClient() {
  const {
    form,
    currentStep,
    delta,
    prev,
    submitButton,
    nextButton,
    formModified,
    hasDraft,
    loadSavedDraft,
    deleteSavedDraft,
    handleSaveDraft,
    clearForm,
    processForm,
  } = useClientRegistrationForm();
  return (
    <ContentLayout title="Register Client">
      <BreadcrumbPages
        links={[
          {
            href: "/dashboard",
            label: "Home",
          },
          {
            href: "/dashboard",
            label: "Dashboard",
          },
          {
            href: "/clients",
            label: "Clients",
          },
          {
            href: "/clients/register",
            label: "Register Client",
          },
        ]}
      />
      <section className="w-full mx-auto mt-6">
        <StepIndicator steps={steps} currentStep={currentStep} />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(processForm)} className="mt-12">
            {currentStep === 0 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ClientGeneralInformation form={form} />
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FamilyInformation form={form} />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PensionersInformation form={form} />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <AccountsInformation form={form} />
              </motion.div>
            )}

            <div className="flex justify-between mt-12 mb-5">
              <div className="flex gap-5">
                <Button
                  type="button"
                  onClick={prev}
                  disabled={currentStep === 0}
                  effect={"ringHover"}
                  className="min-w-24 flex justify-around"
                >
                  <ArrowLeft className="size-5" />
                  Previous
                </Button>
                <Button
                  type="reset"
                  variant="ghost"
                  className="group"
                  onClick={clearForm}
                  effect={"hoverUnderline"}
                >
                  <div className="flex items-center gap-2">
                    <Eraser className="size-5" />
                    <p className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100 group-hover:ml-1">
                      Clear Data
                    </p>
                  </div>
                </Button>
              </div>
              <div className="flex gap-2">
                {hasDraft && (
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={deleteSavedDraft}
                      variant="destructive"
                      className="group flex items-center gap-1"
                      effect={"ringHover"}
                    >
                      <div className="flex items-center gap-2">
                        <Trash2 className="size-4" />
                        <p className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100 group-hover:ml-1">
                          Delete Draft
                        </p>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      onClick={loadSavedDraft}
                      variant="secondary"
                      className="group flex items-center gap-1"
                      effect={"hoverUnderline"}
                    >
                      <div className="flex items-center gap-2">
                        <FileUp className="size-4" />
                        <p className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100 group-hover:ml-1">
                          Load Saved Draft
                        </p>
                      </div>
                    </Button>
                  </div>
                )}
                <Button
                  type="button"
                  onClick={handleSaveDraft}
                  variant="secondary"
                  disabled={!formModified}
                  className="group"
                  effect={"hoverUnderline"}
                >
                  <div className="flex items-center gap-2">
                    <Save className="size-4" />
                    <p className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100 group-hover:ml-1">
                      Save Draft
                    </p>
                  </div>
                </Button>
                {submitButton}
                {nextButton}
              </div>
            </div>
          </form>
        </Form>
      </section>
    </ContentLayout>
  );
}
